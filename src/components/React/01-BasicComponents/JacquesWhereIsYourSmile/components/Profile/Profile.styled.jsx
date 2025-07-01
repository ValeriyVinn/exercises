import styled from '@emotion/styled';

export const Profiled = styled.div`
  width: 300px;
  height: auto;
  background-color: white;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  border-radius: 5px;
`;

export const Description = styled.div`
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
width: 200px;
  border-radius: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: rgb(247, 244, 244);`;

export const Name = styled.p`
font-weight: 600;
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;

  /* $(props => {username}); */
  
  `;

export const Tag = styled.p`
color: gray;
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;`;

export const Location = styled.p`
color: inherit;
  text-align: center;
  font-size: 14px;`;

export const StatsUl = styled.ul`
display: flex;
  background-color: rgb(247, 244, 244);
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid rgb(200, 199, 199);`;

export const ListItem = styled.li`
display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;`;

export const Label = styled.span`
color: rgb(128, 128, 128);
  font-size: 12px;
  margin-bottom: 4px;`;


export const Quantity = styled.span`
font-weight: 600;
  font-size: 18px;`;