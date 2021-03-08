import React from 'react';
import { IconType } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { data } from 'utils/list-data';
import { Column, Container, Item, Project } from './styles';

interface DataPropsType {
  projectName: string;
  description: string;
  link: string;
  projectIcon: IconType;
}

const List = () => {
  return (
    <Container>
      {data.map((item: DataPropsType, index) => (
        <Column key={index}>
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
        </Column>
      ))}
    </Container>
  );
};

export default List;
