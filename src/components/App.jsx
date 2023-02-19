import { useState, useEffect } from 'react';
import { InfoForms } from "./InfoForms/InfoForms";
import { InfoList } from "./InfoList/InfoList";
import { Section, TitleWrapper } from "components/App.styled";

export function App() {
  const [infos, setInfos] = useState(() => {
    return JSON.parse(localStorage.getItem('infos')) ?? [];
  })

  useEffect(() => {
    localStorage.setItem('infos', JSON.stringify(infos));
  }, [infos]);
  
  const addInfo = info => {
    if (
      !infos.find(
        ({ name }) => (name.toLocaleLowerCase() === info.job.toLowerCase()&&name.toLocaleLowerCase() === info.name.toLowerCase()))
    ) {
      setInfos(
        infos => [...infos, info]
      )
    } else {
      alert('balbalbalbalba')
    }
  };

  return (
      <div>
      <InfoForms onSubmit={addInfo}/>
      <InfoList infos={infos} />
      <Section>
      <TitleWrapper>Worker</TitleWrapper>
      <TitleWrapper>JOB</TitleWrapper>
      </Section>
        </div>
  );
};
