const HomePage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 p-4">
      <h1 className="display-4 fw-bold mb-4 text-center">Welcome to Our Dashboard</h1>
      <p className="fs-5 text-center mx-auto" style={{ maxWidth: '600px' }}>
        We are thrilled to have you here! Please note that our backend services are hosted on a free platform provided by Render.
        As a result, API responses might be slightly delayed. We kindly ask for your patience while the  data is being fetched. 
       <p className="text-success fw-bold"> It may take upto 1 minute.</p>
      </p>
      <p className="fs-5 text-center mt-3">Thank you for your understanding and enjoy exploring our dashboard!</p>
    </div>
  );
};

export default HomePage;
