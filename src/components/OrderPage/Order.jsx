import 'bootstrap/dist/css/bootstrap.min.css';
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

        axios.post(
            "https://reqres.in/api/pizza",
            formData,
            {
                headers: {
                    "x-api-key": "reqres_842e591c7b8b414a92d01eb8a9561338",
                    "Content-Type": "application/json"
                }
            }
        )
            .then((response) => {
                console.log("Sipariş oluşturuldu:", response.data);
                history.push("/success");
            })
            .catch((error) => {
                console.error("Hata:", error);
            });
    }

    return (
        <>
            <div
                style={{ backgroundColor: "#CE2829" }}
                className="py-4 mb-4"
            >
                <Container>
                    <Row>
                        <Col className="text-center">
                            <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" height="45" />

                            <p className="text-white mt-2 mb-0">
                                Anasayfa - <strong>Sipariş Oluştur</strong>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div >
            <Form onSubmit={handleSubmit}>
                <Container className="mt-4">
                    <Row>
                        <Col md="8" className="mx-auto">

                            <FormGroup>
                                <Row className='mt-5'>
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
                            </FormGroup>
                            <Row>
                                <Col>
                                    <Label className="fw-bold mb-2">
                                        Boyut Seç<span className="text-danger ms-1">*</span>
                                    </Label>

                                    <FormGroup>
                                        <Input name="boyut" type="radio" value="kucuk" required onChange={handleChange} />
                                        <Label className="ms-2" check>Küçük</Label>
                                    </FormGroup>

                                    <FormGroup>
                                        <Input name="boyut" type="radio" value="orta" onChange={handleChange} />
                                        <Label className="ms-2" check>Orta</Label>
                                    </FormGroup>

                                    <FormGroup>
                                        <Input name="boyut" type="radio" value="buyuk" onChange={handleChange} />
                                        <Label className="ms-2" check>Büyük</Label>
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <FormGroup>
                                        <Label for="hamurSec" className="fw-bold mb-2">Hamur Seç<span className="text-danger ms-1">*</span></Label>

                                        <Input
                                            id="hamurSec"
                                            name="hamur"
                                            type="select"
                                            required
                                            defaultValue=""
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>
                                                Hamur Kalınlığı
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

                                <Col md="4" className='mt-3'>
                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="pepperoni" onChange={handleChange} />
                                        <Label check>Pepperoni</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="tavuk" onChange={handleChange} />
                                        <Label check>Tavuk Izgara</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="misir" onChange={handleChange} />
                                        <Label check>Mısır</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="sarmisak" onChange={handleChange} />
                                        <Label check>Sarımsak</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="ananas" onChange={handleChange} />
                                        <Label check>Ananas</Label>
                                    </FormGroup>
                                </Col>

                                <Col md="4" className='mt-3'>
                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="sosis" onChange={handleChange} />
                                        <Label check>Sosis</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="sogan" onChange={handleChange} />
                                        <Label check>Soğan</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="sucuk" onChange={handleChange} />
                                        <Label check>Sucuk</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="biber" onChange={handleChange} />
                                        <Label check>Biber</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="kabak" onChange={handleChange} />
                                        <Label check>Kabak</Label>
                                    </FormGroup>
                                </Col>

                                <Col md="4" className='mt-3'>
                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="jambon" onChange={handleChange} />
                                        <Label check>Kanada Jambonu</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="domates" onChange={handleChange} />
                                        <Label check>Domates</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="jalapeno" onChange={handleChange} />
                                        <Label check>Jalapeno</Label>
                                    </FormGroup>
                                </Col>
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
                            <Row className="mt-4">
                                <Col md="4">
                                    <FormGroup>
                                        <ButtonGroup>
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
                                    </FormGroup>
                                </Col>

                                <Col md="8">
                                    <FormGroup>
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

                                                <Button color="warning" className="w-100 mt-3" type="submit">
                                                    SİPARİŞ VER
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </FormGroup>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}