import Oneko from './components/Oneko/Oneko.js';
import Resume from './components/Resume/Resume.js'


const App = () => (
    <>
      <div className="flex flex-col bg-purple-600 bg-cover h-screen w-full justify-center items-center">
        <h1 className="text-black font-bagel text-center text-9xl mb-5">Hello,</h1>
        <p className="text-center font-bagel text-4xl">
            Welcome to my website! My name is Sylvia. <br />
            Unfortunately, I haven't gotten around to building this website yet so please check back later! :)
        </p>
        <div>
          <p className='text-black font-bagel text-2xl'>
            In the meantime click this button for a cat ===> &nbsp;
            <Oneko />
          </p>
          <p className="text-black font-bagel text-2xl">
            Oh, and click here for my resume ===> &nbsp;
            <Resume />
          </p>
        </div>
      </div>
    </>
);

export default App;
