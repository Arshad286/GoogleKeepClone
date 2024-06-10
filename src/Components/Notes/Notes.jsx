
import { Box, styled , Grid} from "@mui/material"
import Form from "./Form";
import Note from "./Note";
import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import EmptyNotes from "./EmptyNotes";

 

const DrawerHeader = styled('div')(({ theme }) => ({
 
    ...theme.mixins.toolbar,
  }));



const Notes = () =>{

  const {notes, setNote} = useContext(DataContext);
    return (
    <>
       <Box sx={{ display: 'flex' }}>
     
       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
   
       <DrawerHeader/>
       <Form/>
       { (notes.length > 0) ?
       <Grid container style={{ marginTop: 16}}>
          {
            notes.map(note => (
              <Note note ={note}/>
                    ))}
                </Grid>
              : <EmptyNotes/>
                  }
        </Box>

        </Box>
    </>
    )
}

export default Notes