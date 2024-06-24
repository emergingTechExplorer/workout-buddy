# workout-buddy

## Deploy locally under dev mode

1. Download and install the following.

- [Node.js](https://nodejs.org/en/download/package-manager)
- [Git](https://git-scm.com/downloads)

2. Create a cluster in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).

3. Add the following content inside `.env` file.

```sh
PORT=4000
MONGO_URI="<MongoDB_Atlas_Connection_String>"
```

4. Execute the following.

```sh
git clone https://github.com/lakbot/workout-buddy
cd workout-buddy/backend
npm install
npm run dev
```