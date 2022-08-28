class Info {
  push_algo = `
  begin procedure push: stack, data    <br/> <br/>

  if stack is full:<br/>
     return null <br/> 
  endif <br/> <br/>
  
  top ← top + 1     <br/>
  stack[top] ← data <br/> <br/>

end procedure <br/> <br/>
  `;

  pop_algo = `

  begin procedure pop: stack <br/><br/>

   if stack is empty <br/>
      return null <br/>
   endif <br/> <br/>
   
   data ← stack[top] <br/>
   top ← top - 1    <br/>
   return data  <br/>
    
   end procedure <br/>
`;

  isempty_algo = `
  begin procedure isempty   <br/><br/>

  if top less than 1   <br/>
     return true <br/>
  endif <br/> <br/>
  
  return false <br/>
  end procedure <br/>
`;
}
