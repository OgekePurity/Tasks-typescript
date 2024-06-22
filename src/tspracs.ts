/* type User = { id: number; name: string; isActive: boolean }

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser(user: User): {
    id: number;
    name: string;
    isActive: boolean;
  } {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
  }



 */

//////////////


/* type Employee = {id: number; name: string; department: string };
type Manager = {id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`)
  }
}



const alice: Employee = {id: 1, name: "alice", department: "sales" }
const jack: Employee = {id: 1, name: "jack", department: "HR" }


const bob: Manager = {id: 1, name: "bob", employees: [alice, jack] }

printStaffDetails(alice)
printStaffDetails(bob) */

const url = 'https://www.course-api.com/react-tours-project';

// Define a type for the data you're fetching.
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  // Add more fields as necessary.
};

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Tour[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.error(errMsg);

    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});
export {}