import { Grid } from '@material-ui/core';
import React,{useState} from 'react'


const fakeData = {
    id:0,
    congTy:"",
    chucVu:"",
    thanhPho:"",
    moTa:"",
}
function Form() {
    const [value, setValue] = useState(fakeData);
    return (
        <>
            <Form>
                <Grid container>
                    <Grid item xs={5}>
   
                    </Grid>
                    <Grid item xs={7}>
                    <TextField
                            variant="outline"
                            label="Ten cong ty"
                            value={value.congTy}    
                        >                            
                        </TextField>
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}

export default Form
