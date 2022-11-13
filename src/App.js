import logo from './logo.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='row' >
        <div  className='col-12' style={{paddingTop:'50px'}}>
          <div style={{textAlign: 'center'}}>
            <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" className='img-fluid' style={{width:'180px'}}></img>
          </div>
        </div>
        <div className='col-12' style={{paddingLeft:'68px',paddingRight:'68px',marginTop:'20px'}}>
          <form>
            <div class="user-input-wrp">
              <br/>
              <input type="text" class="inputText" required/>
              <span class="floating-label">Phone number, username or email address</span>
            </div>
            <div class="user-input-wrp" style={{marginTop:'-17px'}}>
              <br/>
              <input type="password" class="inputText" required/>
              <span class="floating-label">Password</span>
            </div>
            <button style={{backgroundColor:'#3E96EF',color:'#FFFFFF',border:'none',borderRadius:'5px',fontFamily:'Roboto Bold',width:'100%',padding:'4px 0px',marginTop:'15px',fontSize:'16px'}}>Log in</button>
          </form>
        </div>
        <div className='col-12' style={{paddingLeft:'68px',paddingRight:'68px',marginTop:'20px'}}>
          <img src="/assets/Or_Image.png" className='img-fluid' style={{width:'100%'}}></img>
          <div style={{display:'flex', alignItems:'center',justifyContent:'center',paddingBottom:'15px',paddingTop:'20px'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" className='img-fluid' style={{width:'15px'}}></img>
            <p style={{color:'#385185',fontFamily:'Roboto Regular', fontSize:'15px',marginBottom:'0px',marginLeft:'10px',fontWeight:'bold'}}>Log in with Facebook</p>
          </div>
        </div>
        <div className='col-12' style={{paddingLeft:'68px',paddingRight:'68px',marginTop:'20px'}}>
          <div  style={{display:'flex',flexDirection:'column', justifyContent:'space-between',height:'250px'}}>
            <p style={{color:'#385185',fontFamily:'Roboto Regular', fontSize:'13px'}}>Forgotten you password?</p>
            <p style={{color:'#222222',fontFamily:'Roboto Regular', fontSize:'15px'}}>Don't have an account? <span style={{color:'#3E96EF',fontFamily:'Roboto Bold',}}>Sign Up</span></p>
            <div>
              <p style={{color:'#222222',fontFamily:'Roboto Regular', fontSize:'15px'}}>Get the app.</p>
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" className='img-fluid' style={{width:'135px'}}></img>
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" className='img-fluid' style={{width:'135px'}}></img>
            </div>
          </div>
        </div>
        <div className='col-12' style={{paddingLeft:'68px',paddingRight:'68px',marginTop:'20px'}}>

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
