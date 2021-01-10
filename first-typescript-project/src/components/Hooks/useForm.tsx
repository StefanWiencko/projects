import {useState} from 'react'

export const useForm  = <T extends {}>(initialvalues: T)=>{
    const [values,setValues] = useState(initialvalues)
    return [values, (e:React.ChangeEvent<HTMLInputElement>) => setValues({...values,[e.target.name]:e.target.value})]
}
