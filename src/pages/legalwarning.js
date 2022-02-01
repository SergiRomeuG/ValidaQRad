import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
//import { T } from '../i18n/translate';
//import { goHome, gotoPage } from "../router";
var gotoPage = window.gotoPage

export class LegalWarning extends AbstractPage {

    constructor(domElem) {
        super(domElem)
    }

    enter() {
        console.log("RefreshKeys: enter page")

        window.refreshTrustedKeys()

        let theHtml = html`
        <div class="container" style="overflow-y: scroll; height: 600px; margin-top:100px">
            <div class="w3-card-4 w3-center" style="height:auto">
        
                <header class="w3-container color-primary" style="padding:10px">
                    <h1>${T("Avís Legal")}</h1>
                </header>
                
                <div class="w3-padding-16">
                    <div style="padding-left: 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;"><strong>${T("1. Titularitat de la Pàgina Web")}</strong></p>
                    </div>
                    <div style="padding:0 20px; text-align: justify;">
                        <span style="margin-bottom: 10px;">${T("L’ informem que el domini")}</span>
                        <span><a href="https://www.validaqr.ad" rel="noopener noreferrer" target="_blank">https://www.validaqr.ad/</a></span>
                        <span style="margin-bottom: 10px;">${T(" és una pàgina web (d’ara en endavant, la “Pàgina Web” o “VALIDA QR”) de titularitat de la Fundació Privada del Sector Públic Andorra Recerca i Innovació  (d’ara en endavant, “LA FUNDACIÓ” o “nosaltres”) amb N.R.T. U-380100-T i domicili a Sant Julià de Lòria, Avinguda Rocafort, 21-23, Edifici El Molí, 3a planta (AD600) ANDORRA, telèfon de contacte (+376) 742 630 i correu electrònic ")}</span>
                        <span><a href="mailto:info@andorra-digital.com" target="_blank">info@andorra-digital.com</a></span>
                    </div>
                    
                    <div style="margin-top: 10px; padding-left: 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;"><strong>${T("2. Funció de VALIDA QR")}</strong></p>
                    </div>
                    <div style="padding:0 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;">${T("VALIDA QR permet escanejar i llegir el codi QR del Certificat COVID Digital emès per Andorra, per països de la Unió Europea, Regne Unit i tots aquells altres països tercers que emeten certificats en el mateix format que el Certificat COVID digital de la Unió Europea, tant en format imprès com digital i mostra en pantalla les dades personals de l’usuari i si el seu certificat és o no vàlid.")}</p>
                    </div>

                    <div style="padding-left: 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;"><strong>${T("3. Accés i utilització de la Pàgina Web")}</strong></p>
                    </div>
                    <div style="padding:0 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;">${T("L’accés a la Pàgina Web té caràcter gratuït per als usuaris d’aquesta.")}</p>
                        <p style="margin-bottom: 10px;">${T("Amb caràcter general l’accés i utilització de la Pàgina Web no exigeix la prèvia subscripció o registre dels usuaris d’aquesta.")}</p>
                    </div>

                    <div style="padding-left: 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;"><strong>${T("4. Condicions d’ús de la Pàgina Web")}</strong></p>
                    </div>
                
                    <div style="padding:0 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;">${T("La utilització de la Pàgina Web per qualsevol persona atribueix la condició d’usuari (d’ara endavant, l’ ”Usuari”). L'Usuari s'obliga a fer un ús correcte de la Pàgina Web de conformitat amb les condicions descrites a continuació:")}</p>
                        <ul style="list-style-type:disc;">
                            <li style="margin-bottom: 10px;">${T("General")}</li>
                            <p style="margin-bottom: 10px;">${T("L'Usuari es compromet a utilitzar aquesta Pàgina Web i els seus Continguts respectant sempre les condicions, reservant-se LA FUNDACIÓ totes les accions legals que li puguin correspondre per qualsevol responsabilitat que es derivi del seu incompliment. Queda expressament prohibit l'ús de la Pàgina Web amb finalitats lesives de béns o interessos de LA FUNDACIÓ o de tercers o que de qualsevol altra forma sobrecarreguin, danyin o inutilitzin les xarxes, servidors i altres equips informàtics o productes i aplicacions informàtiques de LA FUNDACIÓ o de tercers. Així mateix, queda expressament prohibit desenvolupar activitats contràries a les lleis, a la moral i a l’ordre públic.")}</p>
                            <li style="margin-bottom: 10px;">${T("Continguts")}</li>
                            <p style="margin-bottom: 10px;">${T("Amb caràcter merament enunciatiu, l'Usuari d'acord amb la legislació vigent haurà d'abstenir-se de reproduir, copiar, distribuir, posar a disposició, comunicar públicament, transformar, modificar i eliminar els Continguts, excepte en els casos autoritzats en la llei o expressament consentits per LA FUNDACIÓ o per qui ostenti la titularitat dels drets d'explotació si és el cas.  ")}</p>
                        </ul>
                    </div>
                    
                    <div style="padding-left: 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;"><strong>${T("5. Limitació de la responsabilitat ")}</strong></p>
                    </div>
                
                    <div style="padding:0 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;">${T("LA FUNDACIÓ es compromet a fer els seus millors esforços per a evitar qualsevol error en els continguts que poguessin aparèixer en la Pàgina Web.")}</p>
                        <p style="margin-bottom: 10px;">${T("En qualsevol cas:")}</p>
                        <ul style="list-style-type:disc;">
                            <li style="margin-bottom: 10px;">${T("LA FUNDACIÓ estarà exempta de qualsevol responsabilitat derivada d’eventuals errors en els continguts que poguessin aparèixer.    ")}</li>
                            <li style="margin-bottom: 10px;">${T("LA FUNDACIÓ es reserva el dret a interrompre l'accés a la Pàgina Web, sense previ avís, ja sigui per motius tècnics, de seguretat, de control, de manteniment, per problemes de subministrament elèctric o per qualsevol altra causa fundada.")}</li>
                            <li style="margin-bottom: 10px;">${T("LA FUNDACIÓ no garanteix que la Pàgina Web i el servidor estiguin lliures de virus i no es fa responsable dels possibles errors de seguretat ni dels danys i perjudicis que es puguin derivar d’interferències, omissions, interrupcions, virus informàtics, avaries telefòniques o desconnexions en el funcionament operatiu d’aquest sistema electrònic, motivat per causes alienes a LA FUNDACIÓ, de retards o bloquejos en l’ús d’aquest sistema electrònic causats per deficiències de línies telefòniques o sobrecàrregues en el sistema d’Internet o en altres sistemes electrònics, així com també de danys que puguin ser causats per terceres persones mitjançant intromissions il·legítimes fora del control de LA FUNDACIÓ. ")}</li>
                            <li style="margin-bottom: 10px;">${T("LA FUNDACIÓ no assumeix cap responsabilitat derivada de la connexió o continguts dels enllaços de tercers.")}</li>
                            <li style="margin-bottom: 10px;">${T("LA FUNDACIÓ es reserva el dret d’actualitzar, modificar o eliminar la informació que figura a la seva Pàgina Web sense avís previ.")}</li>
                        </ul>
                    </div>

                    <div style="padding-left: 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;"><strong>${T("6. Galetes i Dades de caràcter personal")}</strong></p>
                    </div>
                    <div style="padding:0 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;">${T("La Pàgina Web no utilitza galetes ni cal altre tecnologia similar de recollida d’informació.")}</p>
                        <p style="margin-bottom: 10px;">${T("Per una altra banda la Pàgina Web no emmagatzema, conserva, ni tracta dades personals. La finalitat legítima d’aquesta Pàgina Web és validar l’autenticitat del Certificat COVID Digital emès per Andorra, països de la Unió Europea, Regne Unit i tots aquells altres països tercers que emeten certificats en el mateix format que el Certificat COVID digital de la Unió Europea.")}</p>
                        <p style="margin-bottom: 10px;">${T("La Pàgina Web només mostra en la pantalla del dispositiu, la identitat de la persona titular del Certificat que acaba de llegir. Aquesta informació desapareix una vegada mostrada i no es registra en el dispositiu. L’ús d’aquesta Pàgina Web només està autoritzat per a la finalitat indicada.")}</p>
                    </div>

                    <div style="padding-left: 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;"><strong>${T("7. Llei aplicable i jurisdicció ")}</strong></p>
                    </div>
                    <div style="padding:0 20px; text-align: justify;">
                        <p style="margin-bottom: 10px;">${T("En el cas que sorgeixi qualsevol conflicte o discrepància en la interpretació o aplicació del present Avís Legal, serà d’aplicació la legislació andorrana i els jutjats i tribunals del Principat d’Andorra seran els competents en la matèria.")}</p>&nbsp                      
                    </div>

                    <div style="padding: 0 20px 30px 0; text-align: right">
                        <p>Data darrera actualització: 26 de gener de 2022.</p>
                    </div>

                    <button @click=${()=>this.acceptedButton()} class="w3-button btn-color-primary btn-hover-color-primary w3-xlarge w3-round-xlarge">${T("Accept")}</button>
                </div>
                <header class="w3-container color-primary" style="padding:10px; margin-bottom: 20px">

                </header>
        
            </div>
        </div>
        `
        this.render(theHtml)
    }

    async acceptedButton() {
        window.initialHeader();
        window.history.back();
    }
}

