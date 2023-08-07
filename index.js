import emailjs from "emailjs-com";

const TemplateID = "template_4x01bng";
const PublicKey = "_RyfKlQUkTyEAVeWB";
const ServiceID = "service_yfnl7yp";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(ServiceID, TemplateID, form.current, PublicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={contactForum} onSubmit={send}>
      <label>FullName</label>
      <input type="text" name="Fullname" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="Message" />
      <input type="submit" value="send" />
    </form>
  );
};
