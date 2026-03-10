import { Card, CardBody, Container, Row } from "reactstrap";
import Footer from "../MainPage/Footer";
import "./Success.css"
import { useLocation } from "react-router-dom";

export default function Success() {
    const location = useLocation();
    const orderData = location.state?.order;
    return (<>
        <div
            style={{
                backgroundColor: "#CE2829",
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <img
                src="/images/iteration-1-images/logo.svg"
                alt="Teknolojik Yemekler"
                style={{ marginBottom: "4rem", marginTop: "3rem" }}
            />
            <div>
                <p
                    style={{
                        color: "var(--color-yellow)",
                        fontFamily: "Satisfy",
                        fontSize: "2rem",
                        fontWeight: 200,
                        textAlign: "center"
                    }}
                >
                    lezzetin yolda
                </p>
                <h1
                    style={{
                        color: "white",
                        fontWeight: "300",
                        letterSpacing: "2px",
                        textAlign: "center"
                    }}
                >
                    SİPARİŞ ALINDI!
                </h1>
            </div>
            <hr
                className="w-50 my-4 mx-auto"
                style={{
                    border: "none",
                    height: "0.5px",
                    backgroundColor: "white",
                    opacity: 0.7
                }}
            />

            <div className="order">
                <div>
                    <h4 style={{
                        color: "white",
                        textAlign: "center"
                    }}>{orderData.isim}</h4>
                </div>
                <div className="orderDetail">
                    <p>Boyut: <span style={{ fontWeight: "bold" }}>{orderData.boyut}</span></p>
                    <p>Hamur: <span style={{ fontWeight: "bold" }}>{orderData.hamur}</span></p>
                    <p>Malzemeler: <span style={{ fontWeight: "bold" }}>{orderData.malzeme.join(", ")}</span></p>
                </div>
            </div>


            <Card className="success-card">
                <CardBody>

                    <h6 className="card-title">Sipariş Toplamı</h6>

                    <div className="card-row">
                        <span>Seçimler</span>
                        <span>{orderData.secimler}₺</span>
                    </div>

                    <div className="card-row">
                        <span>Toplam</span>
                        <span>{orderData.fiyat}₺</span>
                    </div>

                </CardBody>
            </Card>
        </div>
        <Footer />
    </>
    );
}