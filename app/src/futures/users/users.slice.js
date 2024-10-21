import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items:[
        {id:101, name:"Tiko", gender:"male", salary:150000},
        {id: 102, name: "Aram", gender: "male", salary: 160000},
        {id: 103, name: "Ani", gender: "female", salary: 155000},
        {id: 104, name: "Lilit", gender: "female", salary: 148000}
    ]
}

export const UserSlice = createSlice({
    name:"Users", 
    initialState,
    reducers:{
        salaryUp:function(state, action){
            const person = state.items.find(user => user.id == action.payload)
            if(person){
                person.salary += 50000
            }
        },

        salaryDown:function(state, action){
            const person = state.items.find(user => user.id == action.payload)
            if(person){
                if(person.salary - 30000 >= 0){
                    person.salary -= 30000
                } else {
                    person.salary
                }
                
            }

        },
        deleteUser:function(state, action){
         state.items = state.items.filter(user => user.id != action.payload)
         
         
        },
        swapUp:function(state, action){
            const index = state.items.findIndex(i => i.id == action.payload)

            if(index != -1 && index != 0){
                [state.items[index], state.items[index-1]] = [state.items[index-1], state.items[index]]
            } else if(index == 0) {
                [state.items[index], state.items[state.items.length - 1]] = [state.items[state.items.length - 1],state.items[index]]
            }
            
            

        },
        swapDown:function(state, action){
            const index = state.items.findIndex(user => user.id == action.payload)
            
            if( index != -1 && index != state.items.length - 1){
                [state.items[index], state.items[index+1]] = [state.items[index+1],state.items[index]]
            
             } else if(index == state.items.length - 1) {
                [state.items[index], state.items[0]] = [state.items[0], state.items[index]]
             }

        }
        
    }
})

export const reducer = UserSlice.reducer
export const {salaryUp, salaryDown, deleteUser, swapUp, swapDown} = UserSlice.actions