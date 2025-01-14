import { FC } from "react";

interface VerificationUserProps {
  code: string;
}

export const VerificationUser: FC<VerificationUserProps> = ({ code }) => (
  <div>
    <p>
      Код подтверждения: <h2>{code}</h2>
    </p>
    <p>
      <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
        Подтвердить регистрацию
      </a>
    </p>
  </div>
);
