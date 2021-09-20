import React,{useEffect, useState, useMemo} from 'react';
import { useForm } from "react-hook-form";
import { ISharing} from 'models/Sharings';
import { Grid, Button,  FormControl, InputLabel,
  Dialog, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import themeConfig from 'config/theme';
import { Texts } from 'modules/Components';
import { useStyles,MyInput } from '../style';
import { TopAlert } from 'modules/Components';
  

export const FormAddNewSha = (props) =>{
  const classes = useStyles();
  //form props
  //const [isSubmited, setIsSubmited] = useState(false);
  //const [openAddForm, setOpenAddForm] = useState(props.stateOpen);
  let initial: any[] =[];
  const [logoState,setLogoState] = useState('');
  const [fileState,setFileState] = useState(initial);
  const [imgName,setImgName] = useState('');
  const [filesNameList,setFilesNameList] = useState(initial);

  //use Effect
  useEffect(() => {
    setLogoState('');
    setFileState(initial);
    setImgName('');
    setFilesNameList(initial);
  }, [props.stateOpen]);

  //handle add form
  const {
    register, handleSubmit, formState: { errors }
  } = useForm<ISharing>();


  //const handleClickOpen = () => {setOpenAddForm(true);};
  const handleClose = () => {props.handleClose();};

  const onSubmit = (value: ISharing) => {
    //setIsSubmited(true);
    console.log(value);
    const data = value;
    data['logo'] = logoState;
    data['files'] = fileState;
    props.handleSubmit(data);
  }
  //read image
  const handleOnChange =(e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    //if (file.type)
    if(e.target.name ==='logo'){
      reader.onloadend = () => {
        setLogoState((reader.result)? (reader.result).toString() : '');
        setImgName(file.name);
      };
      reader.readAsDataURL(file);
      console.log(file);
    }
    else{
      reader.onloadend = () =>{
        console.log(file);
      };
      reader.readAsDataURL(file);
    }
  };
  
  //read files
  const handleOnChangeFile =(e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files;
    console.log('listFiles',file);
    setFileState(file);
    if (file.length !== 0)
    {
      for (var val of file){
        const nameList = initial;
        nameList.push(val.name);
        setFilesNameList(nameList);
      }
    } 
    reader.onloadend = () =>{
        setFileState(file);
        console.log(fileState);
    };
      ///reader.readAsDataURL(file);
  };
  //end handle form
  
  const RequiredError = () => {
    return (
      <TopAlert errMess='This field is required' check="error" />
    );
  };

  return(
    <Dialog open={props.stateOpen} onClose={handleClose} maxWidth='md'>
        <DialogTitle >Add a new sharings</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill all the following fields.
          </DialogContentText>
          <Grid direction='row' container>
            <form className={classes.inputForm} onSubmit={handleSubmit(onSubmit)}>
            <Grid item container className={classes.addForm} xs={12} direction='row'>
              <Grid item container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div>
                  <FormControl className={classes.inputText}>
                    <InputLabel className={classes.labelField}>Title: </InputLabel>
                    <MyInput
                      placeholder="Title" type='text'{...register("title", {required: true})}
                    />
                    {errors?.title?.type === "required" && <RequiredError />}
                  </FormControl>
                  </div>
                  <div>
                  <FormControl className={classes.inputText}>
                    <InputLabel className={classes.labelField}>Author: </InputLabel>
                    <MyInput
                      placeholder="Author" type='text'{...register("author", {required: true})}
                    />
                    {errors?.author?.type === "required" && <RequiredError />}
                  </FormControl>
                  </div>
                  <div>
                  <FormControl className={classes.inputText}>
                    <InputLabel className={classes.labelField}>Technical: </InputLabel>
                    <MyInput
                      placeholder="Technical" type='text'{...register("technical", {required: true})}
                    />
                    {errors?.author?.type === "required" && <RequiredError />}
                  </FormControl>
                  </div>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <div>
                  <FormControl className={classes.inputText}>
                  <InputLabel className={classes.labelField}>Image: </InputLabel>
                  <div className={classes.fileUploadWrap}>
                    <label htmlFor="image-upload" className={classes.btnUpload}> Upload Image
                        <input type="file" id="image-upload"
                          {...register("logo")}
                          onChange={handleOnChange}
                          className={classes.inputFile}/>
                    </label>
                  </div>
                  </FormControl>
                  {(imgName !== '') && 
                    <ul><li><p className={classes.nameFiles}>{imgName}</p></li></ul>}
                  </div>
                  <div>
                  <FormControl className={classes.inputText}>
                  <InputLabel className={classes.labelField}>Files: </InputLabel>
                  <div className={classes.fileUploadWrap}>
                    <label htmlFor="file-upload" className={classes.btnUpload}> Upload Files
                    <input type="file" id="file-upload" multiple
                      {...register("files")}
                      onChange={handleOnChangeFile}
                      className={classes.inputFile}/>
                    </label>
                  </div>
                  </FormControl>
                  <ul>
                    {filesNameList.map(fileName => (
                    <li key={fileName}><p className={classes.nameFiles}>{fileName}</p></li>))}
                  </ul>
                  </div>
                </Grid>
                <Grid item xs={12} md={11}>
                  <FormControl className={classes.inputText}>
                    <InputLabel className={classes.labelField}>Description: </InputLabel>
                    <MyInput
                      variant="outlined" placeholder="Description" type='text'
                      {...register("description", {required: true})} minRows={10} multiline
                    />
                  </FormControl>
                </Grid>                    
              </Grid>        
            </Grid>
            <Grid item container>
              <Grid item xs={12} md={5}></Grid>
              <Grid item xs={12} md={7}>
                <Button className={classes.cancelBtn} type='reset' onClick={handleClose} > Cancel</Button>
                <Button className={classes.addBtn} type='submit'> Add to List</Button>
              </Grid>
            </Grid>
          </form>
          </Grid>
        </DialogContent>
      </Dialog>
  )
};