import { Container, Row, Col } from "reactstrap";

export default function Success() {
    return (
        <div
            style={{
                backgroundColor: "#CE2829",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <img
                src="/images/iteration-1-images/logo.svg"
                alt="Teknolojik Yemekler"
                style={{ marginBottom: "80px" }}
            />

            <h1
                style={{
                    color: "white",
                    fontWeight: "300",
                    letterSpacing: "2px",
                    textAlign: "center"
                }}
            >
                TEBRİKLER!
                <br />
                SİPARİŞİNİZ ALINDI!
            </h1>
        </div>
    );
}