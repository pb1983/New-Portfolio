import Form from '../components/Form'

export default function Contact() {


  return (
    <div className="container">
      <div className="row justify-content-center pt-4">
        <div className="col-12 row justify-content-center pt-4">
          <h3 className="text-center pt-4 pb-2">Contact</h3>
          <p className="text-center pb-2">
            If you're interested in contacting me, please fill out the form below. I check my messages often and will get back to you ASAP.
          </p>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}