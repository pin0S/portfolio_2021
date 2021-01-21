import React from 'react';
import './App.scss';
// import Dashboard from './components/Dashboard'

function App() {
  return (
    <main>
      <header>
        <nav>
          <img src={'https://www.flaticon.com/svg/vstatic/svg/733/733579.svg?token=exp=1611220388~hmac=4d49433ea3571064843560f696166bac'}
          alt={'link to Peters Twitter'}/>
          <img src={'https://www.flaticon.com/svg/vstatic/svg/2111/2111425.svg?token=exp=1611220167~hmac=c95fb67ea86154bd2646009998bca791'}
          alt={'link to Peters Github'}/>
          <img src={'https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1611220418~hmac=2fd4189df177265fc2fc762135859f13'}
          alt={'link to Peters LinkedIn'}/>
          <img src={'https://www.flaticon.com/svg/vstatic/svg/860/860758.svg?token=exp=1611220365~hmac=4a2448d6e478ed171bb016998d7100f1'}
          alt={'Send Peter Email'}/>
        </nav>
      </header>
      <section class="dashboard">
        
        <div class="sidebar">
          <div class="user">
            <img src={"none"} alt={'test'}/>
            <p>User name</p>
          </div>
          <div>
            <p>Projects</p>
          </div>
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Blog</p>
          </div>
        </div>
        <div class="content">
            <div class="project-container">
              <h2>Projects</h2>
                <div class="p-card">
                  <h3>Project Title</h3>
                  <p>Description of Project</p>
                  <a></a>  
                </div>
                <div class="p-card">
                  <h3>Project Title</h3>
                  <p>Description of Project</p>
                  <a></a>  
                </div>
                <div class="p-card">
                  <h3>Project Title</h3>
                  <p>Description of Project</p>
                  <a></a>  
                </div>
                <div class="p-card">
                  <h3>Project Title</h3>
                  <p>Description of Project</p>
                  <a></a>  
                </div>
                <div class="p-card">
                  <h3>Project Title</h3>
                  <p>Description of Project</p>
                  <a></a>  
                </div>
            </div>
        </div>
      </section>
      <img class="pb" src={'https://assets.stickpng.com/images/5a059a909cf05203c4b6045b.png'}/>
    </main>
  );
}

export default App;
