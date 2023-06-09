import "./home.scss";

interface HomePageProps {
  name?: string;
}

const Home: React.FC<HomePageProps> = ({ name }) => {
  return (
    <div>
      <h2>Hello World, I am working!</h2>
    </div>
  );
};

export default Home;
