import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { data } from '../../utils/list-data';
import { Colum, Container, Item, Project } from './styles';

const List = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <Colum key={index}>
          <Project>
            <Project.Name>{item.projectName}</Project.Name>
            <item.projectIcon />
          </Project>
          <Item>{item.description}</Item>
          <Project>
            <Project.Repo href={item.link} target="_blank">
              Repository
            </Project.Repo>
            <FaGithub />
          </Project>
        </Colum>
      ))}
    </Container>
  );
};

export default List;
