// import { useRouteError } from "react-router-dom";

import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  // const error = useRouteError() as Error;
  // console.error(error);

  const { t } = useTranslation('notFound');

  return (
    <div id='error-page'>
      <h1>{t('oops')}</h1>
      <p>{t('404')}</p>
      <p>{/* <i>{ error?.message || error.name ||"Error"}</i> */}</p>
    </div>
  );
}
