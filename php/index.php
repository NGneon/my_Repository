<?php
//1
// class Employee{
//   public $name;
//   public $age;
//   public $salary;
//     public function getName(){
//       return $this->name;
//     }
//     public function getAge(){
//       return $this->age;
//     }
//     public function getSalary(){
//       return $this->salary;
//     }
//     public function checkAge(){
//       return $this->salary>18 ? 'true' : 'false';
//     }

// }
// $employee1 = new Employee;
// $employee1->name = 'John';
// $employee1->age = 25;
// $employee1->salary = 1000;

// $employee2 = new Employee;
// $employee2->name = 'eric';
// $employee2->age =26;
// $employee2->salary = 2000;

// // echo 'Сумма зарплат: ' . $employee1->salary + $employee2->salary;
// // echo '<br>';
// // echo 'Сумма возрастов: '.$employee1->age + $employee2->age;
// echo 'Имя сотрудника: '.$employee1->getName();
// echo '<br>';
// echo 'Возраст сотрудника: '.$employee1->getAge();
// echo '<br>';
// echo 'Зарплата сотрудника: '.$employee1->getSalary();
// echo '<br>';
// echo 'Проверка совершеннолетие сотрудника: '.$employee1->checkAge();
// echo '<br>';
// echo 'Сумма зарплат: '. $employee1->getSalary() + $employee2->getSalary();

// class User{
//     public $name;
//     public $age;
//     public function setAge($newAge){
//       if($newAge>18){
//         $this->age= $newAge;
//       } else {
//         echo 'Возраст должен быть больше 18';
//       }
//     }
// }
//   $user1 = new User();
//   $user1->name = 'John';
//   $user1->setAge(12);
//   echo 'возраст: ' .$user1->age;
//   echo '<br>';

// class Student{
//   public $name;
//   public $course;
//   public function transferToNextCourse(){
//     if($this->isCourseCorrect($this->course+1)){
//       $this->course++;
//       echo 'Переведен на курс: '. $this->course;
//     }  else {
//       echo 'Нельзя перевести на курс больше 5';
//     }
//   }
//   private function isCourseCorrect($course){
//     return $course <= 5;
//   }
// }
// $student = new Student();
// $student->name = 'John';
// $student->course = 2;
// $student->transferToNextCourse();


// class User
// 	{
// 		public $name;
// 		public $age;
//     public $salary;

// 		// Конструктор объекта:
// 		public function __construct($name, $age,$salary)
// 		{
// 			$this->name = $name;
// 			$this->age = $age;
//       $this->salary = $salary;
// 		}
// 	}

// 	$user = new User('john', 25,3000);
//   $eric = new User('eric', 25, 1000);
//   $kyle = new User('kyle', 25,2000);
// 	// echo $user->name;
// 	// echo $user->age;
//   // echo $user->salary;
//   echo $user->salary + $eric->salary + $kyle->salary;

// class Employee{
//   private $name;
//   private $age;
//   private $salary;

//   public function getAge(){
//     return $this->age;
//   }
//   public function setAge($age) {
//     if($this->isAgeCorrect($age)){
//       $this->age = $age;
//     }
//   }
//   private function isAgeCorrect($age){
//     return $age >= 1 and $age <= 100;
//   }

//   public function setSalary($salary) {
//     $this->salary = $salary;
//   }
//   public function getSalary(){
//     return $this->salary . '$';
//   }
//   public function setName($name) {
//     $this->name = $name;
//   }
//   public function getName(){
//     return $this->name;
//   }
// }
// $employee1 = new Employee();

// $employee1->setAge(52);
// $employee1->setSalary(50000);
// $employee1->setName('John');

// echo 'Employee name: '. $employee1->getName();
// echo '<br>';
// echo 'Employee age: '. $employee1->getAge();
// echo '<br>';
// echo 'Employee salary: '. $employee1->getSalary();

// Однажды мой брат подошёл ко мне и сказал хули ты блять мою сестру целый день ебал я ему сказал ты немного ебанутый брат потому что я спал не с тобой но хомо брат такие вот дела такие вот в дагестане все живут как долбоёбы блять ну а что мне делать мне нужно сестру ебать давай брат досвидания блять нононо мой батя мне сказал что бы я дейлимандей заказал но я сказал батяне у меня куча дел меня дед раздел иди нахуй пидорас я не умею реповать я не умею рифмовать все что я умею это спать срать и сосать

// class Employee {
//   private $name;
//   private $surname;
//   private $salary;
//   public function __construct($name,$surname,$salary){
//     $this->name = $name;
//     $this->surname = $surname;
//     $this->salary = $salary;
//   }
//   public function getName(){
//     return $this->name;
//   }
//   public function getSurname(){
//     return $this->surname;
//   }
//   public function getSalary(){
//     return $this->salary;
//   }
//   public function setSalary($newSalary){
//     $this->salary = $newSalary;
//   }
// }
// $employee1 = new Employee('John','Smith', 3000);

// $employee1->setSalary(52000);

// echo 'Имя: '. $employee1->getName();
// echo '<br>';
// echo 'Фамилия: '. $employee1->getSurname();
// echo '<br>';
// echo 'Зарплата: '. $employee1->getSalary();

// $users = [
// new User('john', 21),
// new User('eric', 22),
// new User('kyle', 23)
// ];
// foreach ($users as $user) {
// 	echo $user->name . ' ' . $user->age . '<br>';
// }

// $Cities = [
//   new City('Moscow', 125999),
//   new City('London', 8982000),
//   new City('Paris', 2241000),
//   new City('Berlin', 3552000),
//   new City('Madrid', 3165000)
// ];
// foreach ($Cities as $city){
//   echo $city->name . ' '. $city->population . '<br>';
// }

require_once 'Student.php';
require_once 'User.php';
require_once 'Employee.php';

//  class Programmer extends Employee{
//   private $langs = [];

//   public function SetLangs($lang){
//     array_push($this->langs,$lang);
//   }
//   public function GetLangs(){
//     return $this->langs;
//   }
//  }
//  $programmer = new Programmer();
//  $programmer->setName('John');
//  $programmer->setAge(35);
//  $programmer->setSalary(52);
//  $programmer->SetLangs('PHP');
//  $programmer->SetLangs('JavaScript');
//  $programmer->SetLangs('React');
//  echo 'Name: '. $programmer->getName();
//  echo '<br>';
//  echo 'Age: '. $programmer->getAge();
//  echo '<br>';
//  echo 'Salary: '. $programmer->getSalary();
//  echo '<br>';
//  echo 'Languages: '. implode(', ', $programmer->GetLangs());

// class Driver extends Employee
// {
//   private $stazh;
//   private $license;
//   public function setStazh($stazh)
//   {
//     $this->stazh = $stazh;
//   }
//   public function getStazh()
//   {
//     return $this->stazh;
//   }
//   public function setLicense($license)
//   {
//     $this->license = $license;
//   }
//   public function getLicense()
//   {
//     return $this->license;
//   }
// }
// $driver = new Driver();
// $driver->setName('MAU');
// $driver->setAge(35);
// $driver->setSalary(52);
// $driver->setStazh(2);
// $driver->setLicense('B');
// echo 'Name: ' . $driver->getName();
// echo '<br>';
// echo 'Age: ' . $driver->getAge();
// echo '<br>';
// echo 'Salary: ' . $driver->getSalary();
// echo '<br>';
// echo 'Driving experience: ' . $driver->getStazh();
// echo '<br>';
// echo 'License: ' . $driver->getLicense();
// require_once('Cart.php');
// require_once('Product.php');
// $cart = new Cart();
// $cart->addProduct(new Product('banana', 20, 10), 1);
// $cart->addProduct(new Product('apple', 50, 15), 1);
// echo $cart->getTotalCost();
// require_once('Employee.php');
// $arr=[
//   new Employee('John', 25,),
//   new Employee('Alice', 30,),
//   new Employee('Bob', 28,)
// ];
// $arrStudent=[
//   new Student('Daniil', 300),
//   new Student('Danila', 280),
//   new Student('Danil', 20)
// ];
// foreach ($arr as $elem){
//   echo $elem->getName().'<br>';
// }
// echo '<br>';
// foreach($arrStudent as $elem){
//   echo $elem->getName().'<br>';
// }
// $totalSalary = 0;
// foreach ($arr as $elem) {
//   $totalSalary += $elem->getSalary();
// }
// echo '<br>';
// echo (int) $totalSalary;
// echo '<br>';
// $totalScholarship=0;
// foreach ($arrStudent as $elem) {
//   $totalScholarship += $elem->getScholarship();
// }
// echo (int) $totalScholarship;
// require_once('User.php');
// require_once('Employee.php');
// require_once('City.php');
// $arr = [
//   new User('mau', 'mur'),
//   new User('john', 'rar'),
//   new User('Danila', 'Kirichenko'),
//   new Employee('John', 'Smith', 3000),
//   new Employee('Alice', 'Smith', 5000),
//   new Employee('Bob', 'Smith', 4000),
//   new City('Moscow', 125999),
//   new City('London', 8982000),
//   new City('Paris', 2241000)
// ];

// foreach ($arr as $elem) {
//   if ($elem instanceof User) {
//     echo $elem->getName() . '<br>';
//   }
// }
// echo '<br>';
// foreach ($arr as $elem1) {
//   if ($elem1 instanceof City) {
//     echo $elem1->getName() . '<br>';
//   }
// }
// echo '<br>';
// foreach ($arr as $elem2) {
//   if (($elem2 instanceof User) && !($elem2 instanceof Employee) && !($elem2 instanceof City)) {
//     echo $elem2->getName() . '<br>';
//   }
// }

// class ArraySumHelper
// {
//   public static function getSum1($arr)
//   {
//     return self::getSum($arr, 1);
//   }

//   public static function getSum2($arr)
//   {
//     return self::getSum($arr,2);
//   }

//   public static function getSum3($arr)
//   {
//     return self::getSum($arr, 3);
//   }

//   public static function getSum4($arr)
//   {
//     return self::getSum($arr, 4);
//   }

//   private static function getSum($arr, $power)
//   {
//     $sum = 0;

//     foreach ($arr as $elem) {
//       $sum += pow($elem, $power);
//     }

//     return $sum;
//   }
// }

// $arr = [1, 2, 3, 4, 5];
// $helper = new ArraySumHelper();
// echo $helper->getSum1($arr). '<br>';
// class Circle
// {
//   const PI = 3.14;
//   private $radius;

//   public function __construct($radius)
//   {
//     $this->radius = $radius;
//   }

//   public function getSquare()
//   {
//     return self::PI * pow($this->radius, 2);
//   }

//   public function getCircuit()
//   {    
//     return 2 * self::PI * $this->radius;
//   }
// }
// $circle = new Circle(10);
// echo 'Square: '. $circle->getSquare(). '<br>';
// echo 'Circuit: '. $circle->getCircuit(). '<br>';

// require_once('Figure.php');
// require_once('Quadrate.php');
// require_once('Rectangle.php');
// require_once('FiguresCollection.php');
// $figuresCollection = new FiguresCollection;

// $figuresCollection->addFigure(new Quadrate(2));
// $figuresCollection->addFigure(new Quadrate(3));
// $figuresCollection->addFigure(new Rectangle(2, 3));
// $figuresCollection->addFigure(new Rectangle(3, 4));
// echo $figuresCollection->getTotalSquare() . '<br>';
// echo $figuresCollection->getTotalPerimeter();

// require_once('iCube.php');
// require_once('Cube.php');
// $cube = new Cube(3);
// echo $cube->getOb(). '<br>';
// echo $cube->getSquare();

?>