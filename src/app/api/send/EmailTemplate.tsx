interface IEmailTemplate {
  subject: string;
  message: string;
  email: string;
}

export function EmailTemplate({ subject, message, email }: IEmailTemplate) {
  return (
    <div className="bg-slate-800 text-white">
      <h1>{subject}</h1>
      <p>Thank you for contacting us!{email}</p>
      <p>New message submitted:</p>
      <p>{message}</p>
    </div>
  );
}
