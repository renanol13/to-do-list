// import styles from './Home.module.css'

import { useContext } from "react";
import Head from "../Components/Head";
import { ContextStorage } from "../Context/ContextStorage";

const Home = () => {
    const { dataStorage } = useContext(ContextStorage)
    console.log();
    
return (
    <div>
        <Head/>
        <div>
            {
                dataStorage ? <div>
                    tem itens 
                </div> : <p>aindao a tarefas a serem mostradas</p>
            }
        </div>
    </div>
)}

export default Home;