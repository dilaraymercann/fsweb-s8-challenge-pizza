import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Form, FormGroup, Container, Row, Col, Input, Label, ButtonGroup, Button, Card, CardBody } from 'reactstrap';

export default function Order() {
    const [count, setCount] = useState(1);

    function handleSubmit() { }

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
                                        <Input name="boyut" type="radio" value="kucuk" required />
                                        <Label className="ms-2" check>Küçük</Label>
                                    </FormGroup>

                                    <FormGroup>
                                        <Input name="boyut" type="radio" value="orta" />
                                        <Label className="ms-2" check>Orta</Label>
                                    </FormGroup>

                                    <FormGroup>
                                        <Input name="boyut" type="radio" value="buyuk" />
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
                                        <Input type="checkbox" name="malzeme" value="pepperoni" />
                                        <Label check>Pepperoni</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="tavuk" />
                                        <Label check>Tavuk Izgara</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="misir" />
                                        <Label check>Mısır</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="sarmisak" />
                                        <Label check>Sarımsak</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="ananas" />
                                        <Label check>Ananas</Label>
                                    </FormGroup>
                                </Col>

                                <Col md="4" className='mt-3'>
                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="sosis" />
                                        <Label check>Sosis</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="sogan" />
                                        <Label check>Soğan</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="sucuk" />
                                        <Label check>Sucuk</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="biber" />
                                        <Label check>Biber</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="kabak" />
                                        <Label check>Kabak</Label>
                                    </FormGroup>
                                </Col>

                                <Col md="4" className='mt-3'>
                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="jambon" />
                                        <Label check>Kanada Jambonu</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="domates" />
                                        <Label check>Domates</Label>
                                    </FormGroup>

                                    <FormGroup check className="mb-2">
                                        <Input type="checkbox" name="malzeme" value="jalapeno" />
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
                                    name="text"
                                    type="textarea"
                                    placeholder='Siparişine eklemek istediğin bir not var mı?'
                                />
                            </FormGroup>
                            <hr className="my-4" />
                            <Row className="mt-4">
                                <Col md="4">
                                    <FormGroup>
                                        <ButtonGroup>
                                            <Button
                                                color="warning"
                                                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                            >
                                                -
                                            </Button>

                                            <Button disabled color="light">
                                                {count}
                                            </Button>

                                            <Button
                                                color="warning"
                                                onClick={() => setCount(count + 1)}
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
                                                    <span>25.00₺</span>
                                                </div>

                                                <div className="d-flex justify-content-between mt-2 text-danger fw-bold">
                                                    <span>Toplam</span>
                                                    <span>110.50₺</span>
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