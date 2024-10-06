import "./Validation.scss";

export function Validation({
  validationMessage,
}: {
  validationMessage: string;
}) {
  return <div className="validation">{validationMessage}</div>;
}

export default Validation;
