import { useEffect } from "react";
import useCheckOnDashboard from "../hooks/useCheckOnDashboard";

export default function About () {
    const checkOnDashboard = useCheckOnDashboard();

    useEffect(() => {
        checkOnDashboard();
    }, [checkOnDashboard]);

    return (
        <section className="about-page-wrapper">
            <div className="left-column">
                <img className="about-img"
                    src="https://images.unsplash.com/photo-1552400846-fd9f78e36cf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                    alt="mountain"
                />
                <div className="image-attribution">
                        Photo from <a href="https://unsplash.com/photos/SsIBo6siHIc" target="_blank" rel="noreferrer">Unsplash</a>
                </div>
            </div>
            <div className="right-column">
                <h1>About <span className="naturally-about">Naturally</span></h1>
                <div>
                    The Natural Method, also referred to as the Direct Method, is a way of teaching foreign languages in only the target language. It was developed around 1900 in England and is often contrasted with the grammar-translation method.
                </div>
                <br/>
                <div>
                   The goal of Naturally is to give the language learner a dynamic and interactive option for the Natural Method books that are in the public domain. The books can be found <a className="link" href="https://vivariumnovum.it/risorse-didattiche/propria-formazione/metodo-diretto-applicato-alle-lingue-moderne" target="_blank" rel="noreferrer">here</a>, where PDF versions of the texts can be downloaded.
                </div>
                <br/>
                <div>
                    We hope that you enjoy Naturally!
                </div>
            </div>
        </section>
    );
};