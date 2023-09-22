
import './App1.css';

function App() {
  return (
    <>
    <div id="navbar">
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">My Portfolio</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" >
                <div class="offcanvas-header">
                  
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body" id="profile">
                    <div id="my_photo">
                      
                    </div>
                    <div>
                      <p>Oswin Alex</p>
                    </div>
                    
                    <div>
                      <button class="id_btn">Home<a src="index.html"> </a></button>
                    <button class="id_btn">About me</button>
                    <button class="id_btn">Skills</button>
                    <button class="id_btn">Experience</button>
                    </div>
                    
                </div>
              </div>
            </div>
          </nav>
      
    </div>
    </>
  );
}

export default App;
