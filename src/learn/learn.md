# containers vs components
* containers are stateful components
* components are stateless components


``` js
//   CONFUSING PIECE OF CODE
     const tranformedIngredients = 
        // create an array with the values being the key of props.ingredients
            Object.keys(props.ingredients).map(ingKey => {
                return (
                    // creates an array with the number of values entering based on the numbers specified
                    [...Array(props.ingredients[ingKey])].map((_,i) => (
                        <BurgerIngredient key = {ingKey +1} type = {ingKey} />
                    ))
                )
            })
            .reduce((prevValue, currentValue) => {
            return prevValue.concat(currentValue)
            }, [])


// ALTERNATIVE
    for (const ingredient in props.ingredients) {
        for (let i = 0; i < props.ingredients[ingredient]; i++) {
                ingredients.push(<BurgerIngredient key={ingredient + i} type={ingredient} />);
            }
    }


        if (ingredients.length === 0) {
            ingredients = <p>Please start adding ingredients!</p>;
        }

# toFixed()
 
```

# standard
* Name constants you want to use as global variables in all Capital letter

* To fix reduces a number to to the number of decimals specified
- toFixed(2) reduces the decimals to only 2 decimal points 

# border-sizing : border-box
* whne this is set it shrinks the content inside to accomodate the padding border than expanding outside to accomodate the padding and border

# axios
* Axios is recommended to make http request in react
* axios.interceptors are used to show something (intercerpt)' before any ajax request is made. just like preloader was implememnted in rivhmis(jQuery Ajax)
    it takes in 2 functions the request and the errror function
* NOTE: always return the request
``` js
    axios.interceptors.request.use(request => {
        console.log(request)
        return request
    }, error => {console.log(err)})
```
# axios.interceptors.request.use
- this recieves two function argments 
``` js
    axios.interceptors.request.use(handleSuccess, handleError)
```
in all you must return the response
``` js
     axios.interceptors.request.use(success => success, err => err)
```

# react-router

* **react-router** does the login while __react-router-dom__ does the rendering to the page
* If you want to use browser routing with react wrap the **App.js** Component or **Index.js** compoenent with **< BrowserRouter />**
* Use routing inside the child elements as specified below to render components logically. use exact to specify that the path has to be exactly the same path as specified in this case '/'

```js
    <Route path = '/home' exact render = {() => <Posts/>}/> 

    you can also use

    <Route path = '/home' exact component = {importedClassGoesHere}/> 

```

* to get access to routing related props from parent component wrap the child component with withRouter component
  
* If you want to append a link to the current path use 
  
``` js 
    {
    ...
    pathname: this.props.match.url + '/path'
    ...
    }
    the above will append /path to the current path
```
* use __NavLink__ instead of __Link__ if you need to set active class to the links

* when using css modules use activeClassName{classes.active} to avoid errors

* paths/:id means anything after paths that is what __:__ does

* Switch tells react-router that it should load the urls one and a time

NOTE
====
When a component is called using a route the properties of that route gets passed down to the component that calls it

STEPS TO SET ROUTER
===================

1. Wrap the root component with __<BrowserRouter/>__
   
2. import  __<Route/>__ from react router and use to render the component   based on the specified link eg:
    ``` js
        <Route path='/' component = {ImportedComponent} // remember not a JSX   element
    ```
3. use  __<Navlink/>__ if you want to create anchor tags and this will aid     it setting active state of links by using **activeStyle ={{}}** as a       prop    to the navlink
    ``` js
         <NavLink activeStyle ={{styleGoesHer}}> Link </NavLink>
    ```
    or __<Navlink/>__ if you don't care about ```active``` state 

* this is another way to set url without using link
    ```js 
        this.props.history.push({pathname: '/' + id}) 
    ```
    this is simply navigating programitically

# Redirect
* Outside of a switch statement you have to use only to not with from
``` js
    <Redirect to = '/' /> not 
    <Redirect from = '/posts' to = '/' />
```
* you can also redirect using    
``` js 
    this.props.history.push('/posts')
    this.props.history.replace('/posts') // you can also use replace so back will replace the posts part
```

* this catches any unknown request
``` js
    <Redirect from='/' to = '/posts' />
```

# Lazy loading
* The technique for loading what you need is called lazy loading or code-splitting. Here you only load the component when you need it

# React.Fragment
* This can be used in place of Aux

# convert to number
* use __+theString__ or __Number.float(theString)__ to convert a string to a number

# capitalize
* use the below to 
```css

```
#.trim()
- this is used to remove white spacing  

# redux
- this is all about having a clearly defined process of how the state should change
- the convention for dispatch action name is to use all uppercase
- subscription s triggered when the state is updated 

# react=redux
- helps hook up the redux store to react

# concat
- Onlike push this returns a new Array

# types of state
- Local UI state - modal , e.t.c
- persistent state - All users and post, etc
- Client state - authentiction, theme


# css animations
* display property cannot be animated