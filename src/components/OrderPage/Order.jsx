import 'bootstrap/dist/css/bootstrap.min.css';
import "./Order.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Container, Row, Col, Input, Label, ButtonGroup, Button, Card, CardBody } from 'reactstrap';


const initialFormData = {
    isim: "Position Absolute Acı Pizza",
    boyut: "",
    hamur: "",
    malzeme: [],
    note: "",
    adet: 1,
    secimler: 0,
    fiyat: 85.50
}

const malzemeler = [
    { label: "Pepperoni", value: "pepperoni" },
    { label: "Sosis", value: "sosis" },
    { label: "Tavuk Izgara", value: "tavuk" },
    { label: "Soğan", value: "sogan" },
    { label: "Mısır", value: "misir" },
    { label: "Sucuk", value: "sucuk" },
    { label: "Sarımsak", value: "sarmisak" },
    { label: "Biber", value: "biber" },
    { label: "Ananas", value: "ananas" },
    { label: "Kabak", value: "kabak" },
    { label: "Kanada Jambonu", value: "jambon" },
    { label: "Domates", value: "domates" },
    { label: "Jalapeno", value: "jalapeno" }
];

const apiKey = import.meta.env.VITE_API_KEY;

export default function Order() {
    const [formData, setFormData] = useState(initialFormData);
    const history = useHistory();

    function handleAdetChange(type) {
        let yeniAdet = formData.adet;
        let yeniFiyat = formData.fiyat;

        if (type === "increase") {
            yeniAdet += 1;
        }

        if (type === "decrease" && yeniAdet > 1) {
            yeniAdet -= 1;
        }

        yeniFiyat = (85.50 + formData.secimler) * yeniAdet

        setFormData({
            ...formData,
            adet: yeniAdet,
            fiyat: yeniFiyat
        });
    }

    function handleChange(event) {
        const { type, name, value, checked } = event.target;
        let updatePrice = 0;

        if (type === "checkbox") {
            let updatedMalzemeler = [...(formData[name] || [])];

            if (checked) {
                if (updatedMalzemeler.length >= 10) {
                    alert("En fazla 10 malzeme seçebilirsiniz");
                    return;
                }
                updatedMalzemeler.push(value);
            } else {
                updatedMalzemeler = updatedMalzemeler.filter(item => item !== value);
            }
            const secimler = updatedMalzemeler.length * 5
            const toplamFiyat = (85.50 + secimler) * formData.adet

            setFormData({
                ...formData,
                [name]: updatedMalzemeler,
                secimler: secimler,
                fiyat: toplamFiyat
            })

        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!formData.malzeme || formData.malzeme.length < 4) {
            alert("En az 4 malzeme seçmelisiniz");
            return;
        }

        if (formData.malzeme.length > 10) {
            alert("En fazla 10 malzeme seçebilirsiniz");
            return;
        }

        axios.post(
            "https://reqres.in/api/pizza",
            formData,
            {
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": "application/json"
                }
            }
        )
            .then((response) => {
                console.log("Sipariş oluşturuldu:", response.data);
                history.push("/success", { order: response.data });
            })
            .catch((error) => {
                console.error("Hata:", error);
            });
    }

    return (
        <>
            <div
                style={{
                    backgroundColor: "#CE2829",
                    position: "absolute"
                }}
            >
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            <img
                                src="/images/iteration-1-images/logo.svg"
                                alt="Teknolojik Yemekler"
                                className="img-fluid"
                                style={{ height: "30px" }}
                            />

                        </Col>
                    </Row>
                </Container>
            </div >
            <div className="pizza-section" style={{
                backgroundColor: "#F0EAE1"
            }}>
                <img src="/images/iteration-2-images/pictures/food-2.png" className="pizza-image"></img>
                <Col md="8" className="mx-auto pizza-content">
                    <Row><p style={{
                        color: "#5F5F5F",
                        paddingTop: "2rem"
                    }}>
                        Anasayfa - <span style={{
                            color: "#CE2829"
                        }}>Sipariş Oluştur</span>
                    </p></Row>
                    <Row >
                        <Col md="12">
                            <h4>Position Absolute Acı Pizza</h4>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-2">
                        <Col md="6">
                            <h3 className="fw-bold">85.50₺</h3>
                        </Col>

                        <Col md="6" className="text-end">
                            <span className="me-3">4.9</span>
                            <span className="text-muted">(200)</span>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col md="12">
                            <p className="text-muted">
                                Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                                Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
                                geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
                                yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli
                                bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </div>
            <Form onSubmit={handleSubmit} className="mt-4 p-4">

                <Row>
                    <Col md="8" className="mx-auto">
                        <Row>
                            <Col xs="6">
                                <Label className="fw-bold mb-2">
                                    Boyut Seç<span className="text-danger ms-1">*</span>
                                </Label>

                                <label className="custom-radio">
                                    S
                                    <input
                                        type="radio"
                                        name="boyut"
                                        value="S"
                                        required
                                        onChange={handleChange}
                                        data-cy="size-s"
                                    />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="custom-radio">
                                    M
                                    <input
                                        type="radio"
                                        name="boyut"
                                        value="M"
                                        onChange={handleChange}
                                        data-cy="size-m"
                                    />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="custom-radio">
                                    L
                                    <input
                                        type="radio"
                                        name="boyut"
                                        value="L"
                                        onChange={handleChange}
                                        data-cy="size-l"
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </Col>

                            <Col xs="6">
                                <FormGroup>
                                    <Label for="hamurSec" className="fw-bold mb-2">Hamur Seç<span className="text-danger ms-1">*</span></Label>

                                    <Input
                                        id="hamurSec"
                                        name="hamur"
                                        type="select"
                                        required
                                        defaultValue=""
                                        onChange={handleChange}
                                        data-cy="dough-select"
                                    >
                                        <option value="" disabled>
                                            - Hamur Kalınlığı Seç -
                                        </option>

                                        <option value="ince">İnce Hamur</option>
                                        <option value="orta">Orta Hamur</option>
                                        <option value="kalin">Kalın Hamur</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md="12">
                                <Label className="fw-bold">Ek Malzemeler</Label>
                                <p className="text-muted">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                            </Col>

                            {malzemeler.map((item) => (
                                <Col xs="6" md="4" className="mt-3" key={item.value}>
                                    <label className="custom-checkbox">
                                        {item.label}

                                        <Input
                                            className="malzeme"
                                            type="checkbox"
                                            name="malzeme"
                                            value={item.value}
                                            onChange={handleChange}
                                        />

                                        <span className="checkmark"></span>
                                    </label>
                                </Col>
                            ))}
                        </Row>
                        <FormGroup className="mt-4">
                            <Label for="note" className="fw-bold mt-3">
                                Sipariş Notu
                            </Label>

                            <Input
                                className='mt-3'
                                id="note"
                                name="note"
                                type="textarea"
                                placeholder='Siparişine eklemek istediğin bir not var mı?'
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <hr className="my-4" />
                        <Row className="mt-4 mb-4">
                            <Col xs="12" md="4" className="order-2 order-md-1">
                                <div className="d-flex d-md-block gap-2 mt-2 mt-md-0">

                                    <div className="flex-fill">
                                        <ButtonGroup className="w-100">
                                            <Button
                                                color="warning"
                                                onClick={() => handleAdetChange("decrease")}
                                            >
                                                -
                                            </Button>

                                            <Button disabled color="light">
                                                {formData.adet}
                                            </Button>

                                            <Button
                                                color="warning"
                                                onClick={() => handleAdetChange("increase")}
                                            >
                                                +
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                    <Button
                                        color="warning"
                                        className="flex-fill d-md-none"
                                        type="submit"
                                        data-cy="submit-order"
                                    >
                                        SİPARİŞ VER
                                    </Button>

                                </div>
                            </Col>
                            <Col xs="12" md="8" className="order-1 order-md-2">

                                <Card>
                                    <CardBody>

                                        <h6>Sipariş Toplamı</h6>

                                        <div className="d-flex justify-content-between mt-3">
                                            <span>Seçimler</span>
                                            <span>{formData.secimler}₺</span>
                                        </div>

                                        <div className="d-flex justify-content-between mt-2 text-danger fw-bold">
                                            <span>Toplam</span>
                                            <span>{formData.fiyat}₺</span>
                                        </div>

                                    </CardBody>
                                </Card>
                                <Button
                                    color="warning"
                                    className="w-100 mt-2 d-none d-md-block"
                                    type="submit"
                                    data-cy="submit-order"
                                >
                                    SİPARİŞ VER
                                </Button>

                            </Col>

                        </Row>
                    </Col>
                </Row>

            </Form>
        </>
    )
}