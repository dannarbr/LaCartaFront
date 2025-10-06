import React from 'react';
import './Home.css';
import { Button } from 'antd';
import { RiRestaurantLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { HiOutlineQrcode } from "react-icons/hi";
import { Link,useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import TermsModal from '../components/login-auth/TermsModal'; 
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

   const handleTermsAccepted = () => {
    console.log('¡Términos aceptados! Redirigiendo...');
    navigate('/register');
  };

  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const termsHTML = `

    <h3>1. INTRODUCCIÓN</h3>
    <p>Bienvenido a nuestra plataforma.
    Servicio de Gestión de Reservas para Restaurantes
    Dirección: [Calle 1era #3 entre Central y Guarina]
    Teléfono de contacto: [55514390]
    Correo electrónico: [LaCarta@gmail.com].
     Los presentes Términos y Condiciones de Uso (“Términos”) regulan el uso del servicio de gestión de reservas para restaurantes ofrecido por [Nombre de tu empresa], en adelante “la Empresa”, mediante la recepción de mensajes de texto (SMS, WhatsApp o plataformas similares) al número de teléfono publicado por cada restaurante asociado. Este servicio permite a los clientes (“Usuarios”) solicitar reservas en restaurantes participantes de forma gratuita y sin intermediación directa de plataformas de pago o comisiones.
Al utilizar este servicio, el Usuario acepta plena y expresamente estos Términos. Si no está de acuerdo con cualquiera de sus disposiciones, no debe utilizar el servicio.
</p>
    
    <h3>2.DESCRIPCIÓN DEL SERVICIO</h3>
    <p>2.1. La Empresa ofrece una solución tecnológica de gestión de reservas que conecta a los clientes con restaurantes asociados a través de canales de comunicación directa (principalmente WhatsApp y/o número telefónico).
2.2. El servicio es totalmente gratuito para el cliente. No se cobrará ninguna tarifa, comisión ni cargo adicional por el envío de mensajes o la solicitud de reserva.
2.3. Los restaurantes asociados son responsables de la confirmación, modificación o cancelación de las reservas. La Empresa actúa únicamente como intermediario técnico y de gestión, sin tener control directo sobre la disponibilidad, horarios, menú o políticas de los restaurantes.
2.4. La Empresa no realiza pagos, cobros ni procesa transacciones financieras. Todo intercambio económico entre el cliente y el restaurante se realiza directamente en el establecimiento o según lo acordado entre ambas partes.
</p>

    <h3>3. OBLIGACIONES DEL USUARIO</h3>
    <p>3.1. El Usuario se compromete a utilizar el servicio de manera leal, honesta y conforme a la ley.
3.2. Está prohibido el uso del servicio con fines fraudulentos, spam, publicidad no autorizada, mensajería masiva no solicitada o cualquier actividad que interfiera con el normal funcionamiento del sistema.
3.3. El Usuario debe proporcionar información veraz y completa al momento de solicitar una reserva, incluyendo: nombre completo, número de personas, fecha, hora deseada y cualquier requerimiento especial.
3.4. El Usuario reconoce que la confirmación de la reserva depende exclusivamente del restaurante y que la Empresa no garantiza la disponibilidad ni la aceptación de la solicitud.
3.5. El Usuario acepta que los mensajes enviados podrán ser almacenados temporalmente por la Empresa para fines de registro, mejora del servicio y resolución de disputas.
</p>

    <h3>4.OBLIGACIONES DE LA EMPRESA</h3>
    <p>4.1. La Empresa se compromete a mantener un sistema funcional y accesible para la recepción de mensajes de reserva.
4.2. La Empresa no garantiza la inmediatez de la respuesta, ya que la confirmación depende de la disponibilidad y capacidad operativa del restaurante asociado.
4.3. La Empresa no se hace responsable por errores humanos, fallas técnicas de terceros (como redes móviles, WhatsApp, etc.) o retrasos en la comunicación entre el cliente y el restaurante.
4.4. La Empresa no tiene relación laboral, contractual ni de representación con los restaurantes asociados. Cada restaurante opera bajo su propia política y responsabilidad.
4.5. La Empresa puede modificar, suspender o descontinuar el servicio en cualquier momento, previo aviso razonable a los restaurantes asociados. No se notificará individualmente a cada Usuario.
</p>

    <h3>5.  PRIVACIDAD Y PROTECCIÓN DE DATOS</h3>
    <p>5.1. La Empresa recopila y procesa los datos personales del Usuario (nombre, número de teléfono, fecha/hora de la reserva, preferencias) únicamente para gestionar la solicitud de reserva y mejorar la experiencia del servicio.
5.2. Los datos personales no serán compartidos con terceros distintos a los restaurantes asociados, quienes los recibirán directamente a través del mensaje enviado.
5.3. Los restaurantes asociados son responsables del tratamiento seguro y legal de los datos recibidos, conforme a la Ley de Protección de Datos Personales vigente en [país, ej. México, Colombia, España, etc.].
5.4. El Usuario tiene derecho a acceder, rectificar, suprimir u oponerse al tratamiento de sus datos personales. Para ello, puede escribir a: [correo electrónico de protección de datos].
5.5. La Empresa implementa medidas técnicas y organizativas adecuadas para proteger los datos contra pérdida, acceso no autorizado o alteración.
</p>

    <h3>6.LIMITACIÓN DE RESPONSABILIDAD</h3>
    <p>6.1. La Empresa no asume ninguna responsabilidad por:
•	Cancelaciones, cambios o incumplimientos por parte del restaurante.
•	Errores en la comunicación o falta de respuesta por parte del restaurante.
•	Daños indirectos, consecuentes, punitivos o morales derivados del uso del servicio.
•	Problemas técnicos fuera de su control (fallas de red, bloqueos de WhatsApp, etc.).
6.2. El uso del servicio se realiza bajo tu propio riesgo. La Empresa no garantiza que el servicio sea ininterrumpido, seguro o libre de errores.

</p>

       <h3>7.PROPIEDAD INTELECTUAL</h3>
       <p>7.1. Todos los derechos de propiedad intelectual sobre la plataforma, logotipos, software, diseños y contenidos relacionados con el servicio son propiedad exclusiva de [Nombre de tu empresa].
7.2. Queda prohibida la reproducción, distribución, modificación o comercialización del servicio sin autorización expresa por escrito de la Empresa.
</p>

        <h3>8. MODIFICACIONES A LOS TÉRMINOS</h3>
         <p>8.1. La Empresa se reserva el derecho de modificar, actualizar o reemplazar estos Términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente tras su publicación en este documento.
8.2. Se recomienda al Usuario revisar periódicamente esta página para estar al tanto de los cambios. El uso continuado del servicio tras la publicación de nuevas condiciones implica la aceptación tácita de las mismas.
</p>

          <h3>9. DURACIÓN Y TERMINACIÓN</h3>
          <p>9.1. Este servicio es de duración indefinida, salvo que la Empresa decida suspenderlo o finalizarlo por motivos técnicos, legales o comerciales.
9.2. La Empresa podrá suspender o cancelar el acceso del Usuario al servicio si se detecta violación grave de estos Términos, incluyendo uso fraudulento o abusivo.
9.3. La terminación del servicio no afecta los derechos adquiridos antes de dicha suspensión.
</p>

          <h3>10. LEY APLICABLE Y JURISDICCIÓN</h3>
          <p>10.1. Estos Términos se regirán e interpretarán de acuerdo con las leyes de [país, ej. República de México / España / Colombia].
10.2. Cualquier controversia derivada del uso del servicio será sometida a los tribunales competentes de [ciudad, país], renunciando expresamente el Usuario a cualquier otro fuero.
</p>

            <h3>11.CONTACTO</h3>
            <p>Para cualquier duda, reclamo o solicitud relacionada con estos Términos, privacidad o el servicio, contáctanos a:
📧 Correo electrónico: [LaCarta@gmail.com ]
📞 Teléfono de soporte: [55514390]
📍 Dirección: [Calle 1era #3024 entre Central y Guarina]
La Empresa responderá dentro de los 5 días hábiles siguientes a la recepción de tu consulta. <p/>


          <h3>12. CLÁUSULA DE NO VINCULACIÓN</h3>
          <p>Este servicio no constituye un contrato de trabajo, asociación, franquicia, patrocinio o representación entre la Empresa, los restaurantes o los Usuarios. Es un mero canal de comunicación y gestión automatizada. <p/>
          
          <h3> ACEPTACIÓN</h3>
          <p>Al enviar un mensaje al número de teléfono del restaurante para solicitar una reserva, el Usuario declara haber leído, comprendido y aceptado íntegramente los presentes Términos y Condiciones. <p/>


          <h3>    ¡Gracias por confiar en nosotros!
LaCarta — Haciendo más sencillo el mundo de las reservas.</h3>
       

          

  `;

 

  return (
    <div className="home">
      <section className="hero">
        <Header />
        <h1 className="labelCenter">
          Menús Digitales para el Futuro de la Gastronomía
        </h1>
        <p className="labelSub">
          Descubre restaurantes increíbles y explora sus menús digitales. Para restaurantes: digitaliza tu carta gratis y actualízala en tiempo real
        </p>
        <div className="buttonGroup">
          <Link to="/discoverview" style={{ textDecoration: 'none' }}>
            <Button
            type="primary"
            icon={<RiRestaurantLine />}
            className="buttonRestaurant"
          >
            Explorar restaurantes
          </Button>
          </Link>
          
          <Link to="/viewrestaurants" style={{ textDecoration: "none" }}>
            <Button
              type="primary"
              icon={<FiUsers />}
              className="buttonToRestaurant"
            >
              Para restaurantes
            </Button>
          </Link>
        </div>
      </section>

      <section className="sectionMiddle">
        <h2 className="sectionTitle">¿Cómo funciona?</h2>

        <div className="bigBox">
          <div className="box">
            <HiOutlineQrcode className="iconBox" />
            <h3 className="boxTitle">Escanea el QR</h3>
            <p className="boxText">
              Simplemente escanea el código QR en tu mesa para acceder al menú digital del restaurante
            </p>
          </div>

          <div className="box">
            <RiRestaurantLine className="iconBox" />
            <h3 className="boxTitle">Explora el menú</h3>
            <p className="boxText">
              Navega por categorías, ve fotos de los platos y obtén información detallada de cada elemento
            </p>
          </div>

          <div className="box">
            <FiUsers className="iconBox" />
            <h3 className="boxTitle">Gestión fácil</h3>
            <p className="boxText">
              Los restaurantes pueden actualizar precios, platos y disponibilidad en tiempo real
            </p>
          </div>
        </div>

        <h3 className="sectionSubtitle">¿Tienes un restaurante?</h3>
        <p className="labelSub">
          Únete a nuestra plataforma de forma gratuita y digitaliza tu menú hoy mismo. Sin costos ocultos, sin complicaciones.
        </p>
        <Button type="primary" className="buttonStart" onClick={() => setIsTermsModalOpen(true)}>
          Comenzar gratis
        </Button>
        <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        termsContent={termsHTML}
        onSuccess={handleTermsAccepted}
      />
      </section>
    </div>
  );
};

export default Home;