import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop-tutorial',
  imports: [],
  templateUrl: './for-loop-tutorial.html',
  styleUrl: './for-loop-tutorial.css'
})
export class ForLoopTutorial {

 users: string[] = ["Anil", "Ajay", "Bhavesh", "Chandan", "Dinesh", "Eshwar", "Firoz", "Gopal", "Harish", "Iqbal", "Jagan"];

students: { name: string, age: number , status : string   }[] = [
    { name: "Anil", age: 20    , status:"married"  },
    { name: "Ajay", age: 21   , status:"married"  },
    { name: "Bhavesh", age: 22  , status:"married"   },
    { name: "Chandan", age: 23   , status:"married"  },
    { name: "Dinesh", age: 24   , status:"married"  },
    { name: "Eshwar", age: 25   , status:"married"  },
    { name: "Firoz", age: 26   , status:"married"  },
    { name: "Gopal", age: 27  , status:"married"   },
    { name: "Harish", age: 28   , status:"married"  },
    { name: "Iqbal", age: 29   , status:"married"  },
    { name: "Jagan", age: 30  , status:"married"   }
  ];


}
