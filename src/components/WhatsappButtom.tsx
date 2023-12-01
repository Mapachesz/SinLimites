// WhatsAppButton.js o WhatsAppButton.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);
const WhatsAppButton = () => {
  const openWhatsApp = () => {
    // Aquí puedes agregar la lógica para abrir WhatsApp
    // Por ejemplo, abrir un enlace con el número de teléfono
    window.open("https://wa.me/TU_NUMERO_DE_TELEFONO", "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25d366", // Puedes cambiar el color según tus preferencias
        padding: "10px",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "60px", // Ajusta el tamaño del ícono aquí
        lineHeight: "0", // Asegura una alineación vertical precisa
      }}
      onClick={openWhatsApp}
    >
      <FontAwesomeIcon icon={["fab", "whatsapp"]} style={{ color: "#fff" }} />
    </div>
  );
};

export default WhatsAppButton;
