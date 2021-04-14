let baseUrl = "https://goes-app.propulsion-learn.ch/backend/api/";

if(process.env.NODE_ENV === "development")
{
    baseUrl = "http://localhost:8000/backend/api/";
}

export default baseUrl;