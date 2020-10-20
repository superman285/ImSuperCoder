/*
* 请你给一个停车场设计一个停车系统。停车场总共有三种不同大小的车位：大，中和小，每种尺寸分别有固定数目的车位。

请你实现 ParkingSystem 类：

ParkingSystem(int big, int medium, int small) 初始化 ParkingSystem 类，三个参数分别对应每种停车位的数目。
bool addCar(int carType) 检查是否有 carType 对应的停车位。 carType 有三种类型：大，中，小，分别用数字 1， 2 和 3 表示。一辆车只能停在  carType 对应尺寸的停车位中。如果没有空车位，请返回 false ，否则将该车停入车位并返回 true 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-parking-system
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

class ParkingSystem {

	/**
	 *
	 * @param {number} big
	 * @param {number} medium
	 * @param {number} small
	 */
	constructor(big, medium, small) {
		this.big = big;
		this.medium = medium;
		this.small = small;

		this.carNums = [big, medium, small]

	}

	/**
	 *
	 * @param {number} carType   [1,2,3]
	 * @return {boolean}
	 */

	static typeMap = {
		1: 'big',
		2: 'medium',
		3: 'small'
	}

	addCar(carType) {
		/*const sit = (this[ParkingSystem.typeMap[carType]] >= 1 && this[ParkingSystem.typeMap[carType]] --);
		console.log('sit',sit,!!sit);
		return !!sit;*/

		const sit = this.carNums[carType-1] -- > 0
		console.log('sit',sit);
		return this.carNums[carType-1] -- > 0
	}
}

// 更优雅写法

var ParkingSystem2 = function(big, medium, small) {
	this.carNums = [big, medium, small]
};

ParkingSystem2.prototype.addCar = function(carType) {
	return this.carNums[carType-1] -- > 0
};



const MyPark = new ParkingSystem(1,1,1)

console.log(MyPark);

MyPark.addCar(1)
MyPark.addCar(1)
MyPark.addCar(2)
MyPark.addCar(3)
MyPark.addCar(2)
MyPark.addCar(3)

