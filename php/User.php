<?php
// class User
// {
//   private $name;
//   private $surname;
//   private $birthday;

//   public function __construct($name, $surname){
//     $this->name = 'mau';
//     $this->surname = 'mur';
//     $this->birthday = '07-03-2006';
//   }
//   public function getName(){
//     return $this->name;
//   }
//   public function getSurname(){
//     return $this->surname;
//   }
//   public function getBirthday(){
//     return $this->birthday;
//   }
//   public function CalculateAge($birthday){
//     $date = date_create();
//     $birthday = date_create($birthday);
//     $diff = date_diff($date, $birthday);
//     $age = $diff->y;
//     date_format($date,'Y') - date_format($birthday, 'Y');
//     return $age;
//   }
// }

// $user = new User('John', 'Doe');
// // echo $user->getName() . ' ' . $user->getSurname() . ' ' . $user->getBirthday();
// echo $user->CalculateAge($user->getBirthday());


class User{
  public $name;
  public $surname;
  public function __construct($name,$surname){
    $this->name = $name;
    $this->surname = $surname;
  }
  public function getName(){
    return $this->name;
  }
}
?>