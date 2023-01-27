import styled from "styled-components";
const Users = ({userProf}) => {
  
    //STYLE
  
   const Wrapper = styled.div `
   margin-top: 10px;
   margin-right: 10px;
   margin-left: 10px;
   display: flex;
   border-radius: 8px;
   cursor: pointer;
   background: white;
   box-shadow: 0 0 4px ;
   `
   const Wrap = styled.div `
   display: flex;
   `
   const ParagrafId = styled.p `
   
   margin-right: 20px;
   `

   const Img = styled.img `
   margin-top: 3px;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   box-shadow: 0 0 2px ;
   `

   const Paragraf = styled.p `
   margin-left: 100px ;
   font-weight: bold;
   `


 //END STYLE
    return(
        <Wrapper>
        <Wrap>
        <ParagrafId>{userProf.id}</ParagrafId>
        <Img src={userProf.avatar} alt={userProf.name} />
        </Wrap>
        <Paragraf>{userProf.name}</Paragraf>
        </Wrapper>
    )
}

export default Users;