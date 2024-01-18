
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export default function material_ui(){
    let handleclick = () =>{
        console.log("button was click...")
      }
    
      return (
        <>
          <h3>Material Ui Demo</h3>
          <Button variant="contained" onClick={handleclick}>Contained</Button>
          <br /><br />
          <Button variant="outlined" color="secondary">Outlined</Button>
          <br /><br />
          <Button variant="contained"  onClick={handleclick} color="success"> Disabled</Button>
          <br /><br />
          <Button variant="contained" href="/akshay">Link</Button>
          <br /><br />
          <Button variant="contained" disableElevation color="error">Disable elevation</Button>
          <br />
          <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
          <br />
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleclick}>Send</Button>
    
          <Alert severity="error">This is an error alert — check it out!</Alert>
    <Alert severity="warning">This is a warning alert — check it out!</Alert>
    <Alert severity="info">This is an info alert — check it out!</Alert>
    <Alert severity="success">This is a success alert — check it out!</Alert>
    
    <br />
    <br />
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
    
    <br /><br />
    <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
    <Alert
      action={
        <Button color="inherit" size="small">
          UNDO
        </Button>
      }
    >
      This is a success alert — check it out!
    </Alert>
    <br />
    <Alert variant="filled" severity="error">
      This is an error alert — check it out!
    </Alert>
    <br />
    <Alert severity="success" color="info">
      This is a success alert — check it out!
    </Alert>
        </>
      )
}