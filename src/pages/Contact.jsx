import React from "react";

function Contact() {

    function handlesubmit(e) {
        e.preventDefault(); // page reload rokne ke liye
        alert("Info Submitted!");
    }

    return (
        <div 
            style={{
                maxWidth: "500px",
                margin: "80px auto",
                padding: "30px",
                backgroundColor: "#f5f5f5",
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(0,0,0,0.2)",
                fontFamily: "'Georgia', serif",
                color: "#333",
                textAlign: "center"
            }}
        >
            <h1 style={{ marginBottom: "20px", color: "#444" }}>Contact Us</h1>

            <form onSubmit={handlesubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                
                <div style={{ textAlign: "left" }}>
                    <label style={{ fontWeight: "bold" }}>User Name:</label>
                    <input 
                        type="text" 
                        placeholder="Enter your username" 
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                        }}
                        required
                    />
                </div>

                <div style={{ textAlign: "left" }}>
                    <label style={{ fontWeight: "bold" }}>Email:</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                        }}
                        required
                    />
                </div>

                <button 
                    type="submit"
                    style={{
                        padding: "12px 25px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#444",
                        color: "#fff",
                        cursor: "pointer",
                        transition: "all 0.3s"
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#666"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#444"}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;