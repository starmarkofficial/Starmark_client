import { useState ,useEffect} from 'react';
const baseUrl ="https://starmark-serverside.onrender.com"
import axios from 'axios';
import { useAuth } from '../context/auth';
import { MessageDialog } from './HirePage/InputBox';
import CompanyForm from '../Form/CompanyForm';

function ProviderPage() {
    const [auth] = useAuth();
    const [company, setcompany] = useState([])

    const getcompany= async()=>{
      try {
        axios
        .get(`${baseUrl}/get-company/${auth?.user?.email}`)
        .then(({ data }) => {
        
          setcompany(data.company)
          console.log(data.company);
        })
  
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getcompany()
      }, [])
  
      if(!company) return <CompanyForm/>
    
  return (
    <div>
         <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
           <MessageDialog/>
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProviderPage