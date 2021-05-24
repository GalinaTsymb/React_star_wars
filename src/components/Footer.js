import React from "react";
import styled from 'styled-components/macro';

const FootWrap = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;  
  padding: 20px 0;
  border-top: 1px solid #000000;
  > div {  
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  div{ 
  display: flex;
  flex-direction: row;
  align-items: center; }  
  ul{
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  li{
  margin-right: 40px;}
  }
  }
  >div p{
  margin-top: 20px;
  width: 100%;
  text-align: center;
  }
`;
export default function Footer(){

    return (
        <div>
            <FootWrap>
                <div>
                    <div>
                        <p>FOLLOW ME:</p>
                        <ul>
                            <li className={'socialIcons linkedin'}><a href="#"> LinkedIn</a></li>
                            <li className={'socialIcons github'}><a href="#">GitHub</a> </li>
                        </ul>
                    </div>
                    <div><p>DESIGNED AND DEVELOPED BY TIM SARVEY ©2016</p></div>
                </div>
                <div>
                    <p>Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected
                        from <a href="https://starwars.fandom.com/wiki/Main_Page">Wookiepedia.</a> </p>
                </div>
            </FootWrap>
        </div>
    )

}