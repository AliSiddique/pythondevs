import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Thanks for signing up to our wait list. We&quot;re excited to have you on
      board.
    </p>
    <p>We&quot;ll be in touch soon with more information.</p>
  </div>
);
