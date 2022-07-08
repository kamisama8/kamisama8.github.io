var catArr = []; gemArr = []
var cipherArray = []
var openCiphers = ["Gematria", "Septenary", "Jewish", "Numerology", "Xnc Ymd", "Atbash", "Sumerian", "Odd Numbers", "Even Numbers", "Primes", "𝛑", "Fibonacci", "Triangular", "Squares"]
var ciphersOn = []; allCiphers = []; sHistory = []
var opt_NumCalculation = "Reduced"
var primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 
103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]

function Gem_Launch() {
	Set_Categories()
	Build_Ciphers()
}

class cipher {
	constructor(impName, impOrder, impR, impG, impB, impMod1 = "", impMod2 = "", impMod3 = "", impMod4 = "", impMod5 = "") {
		var x, y, xMod
		var impMods = []
		this.cArr = []; this.cArr2 = []; this.cArr3 = []
		this.vArr = []; this.vArr2 = []; this.vArr3 = []
		this.Nickname = impName; this.cp = []; this.cv = []; this.sumArr = []; this.RGB = []
		impMods[0] = impMod1
		impMods[1] = impMod2
		impMods[2] = impMod3
		impMods[3] = impMod4
		impMods[4] = impMod5
		this.RGB = [impR, impG, impB]

		switch (impOrder) {
			case "English":
				for (y = 0; y < 26; y++) {
					this.cArr[y] = (y + 97)
					this.cArr2[y] = (y + 65)
				}
				Build_GemVals(this)
				break;
			case "Jewish":
				this.cArr = [97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 121, 122, 106, 118, 38, 119]
				this.cArr2 = [65, 66, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 88, 89, 90, 74, 86, 38, 87]
				Build_GemVals(this)
				break;
			case "Hebrew G":
				this.cArr = [1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1499, 1500, 1502, 1504, 1505, 1506, 1508, 1510, 1511, 1512, 1513, 1514, 1498, 1501, 1503, 1507, 1509]
				for (y = 0; y < 22; y++) {
					this.vArr.push(y + 1)
				}
				this.vArr[22] = 11; this.vArr[23] = 13; this.vArr[24] = 14; this.vArr[25] = 17; this.vArr[26] = 18
				break;
			case "Hebrew Soffits":
				this.cArr = [1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1499, 1500, 1502, 1504, 1505, 1506, 1508, 1510, 1511, 1512, 1513, 1514, 1498, 1501, 1503, 1507, 1509]
				Build_GemVals(this)
				break;
			case "Greek":
				this.cArr = [913, 914, 915, 916, 917, 988, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 984, 929, 931, 932, 933, 934, 935, 936, 937, 993]
				this.cArr2 = [945, 946, 947, 948, 949, 989, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 985, 961, 963, 964, 965, 966, 967, 968, 969, 993]
				this.cArr3 = [940, 941, 942, 943, 962, 972, 973, 974]
				this.vArr3 = [1, 5, 8, 10, 20, 16, 22, 26]
				Build_GemVals(this)
				break; 
			
			case "Chald":
				for (y = 0; y < 26; y++) {
					this.cArr[y] = (y + 97)
					this.cArr2[y] = (y + 65)
				}
				this.vArr = [1, 2, 3, 4, 5, 8, 3, 5, 1, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 6, 6, 6, 5, 1, 7]
				this.vArr2 = [1, 2, 3, 4, 5, 8, 3, 5, 1, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 6, 6, 6, 5, 1, 7]
				break;
		}

		if (impMods.indexOf("Exception") > -1) {this.Exception = true}
		if (impMods.indexOf("Reverse") > -1) {this.Reverse_Order()}
                if (impMods.indexOf("Xnc YmdNum") > -1) {this.Make_Xnc_Ymd()}
                if (impMods.indexOf("LostNum") > -1) {this.Make_Lost()}
		if (impMods.indexOf("SeptenaryNum") > -1) {this.Make_Septenary()}
			if (impMods.indexOf("MirrorNum") > -1) {this.Make_Mirror()}
                if (impMods.indexOf("FormulaNum") > -1) {this.Make_Formula()}
                	 if (impMods.indexOf("Formula IINum") > -1) {this.Make_Formula_II()}
                	 	 if (impMods.indexOf("Formula IIINum") > -1) {this.Make_Formula_III()}
                if (impMods.indexOf("OppositeNum") > -1) {this.Make_Opposite()}
                if (impMods.indexOf("Not PrimesNum") > -1) {this.Make_Not_Primes()}
                
                if (impMods.indexOf("Keyboard INum") > -1) {this.Make_Keyboard_I()}
                if (impMods.indexOf("Keyboard IINum") > -1) {this.Make_Keyboard_II()}
                if (impMods.indexOf("Keyboard IIINum") > -1) {this.Make_Keyboard_III()}	
                if (impMods.indexOf("Phone NumberNum") > -1) {this.Make_Phone_Number()}
                if (impMods.indexOf("RomanNum") > -1) {this.Make_Roman()} 

                if (impMods.indexOf("Odd NumbersNum") > -1) {this.Make_Odd_Numbers()}
                if (impMods.indexOf("Even NumbersNum") > -1) {this.Make_Even_Numbers()}
                if (impMods.indexOf("Composite NumbersNum") > -1) {this.Make_Composite_Numbers()}
                if (impMods.indexOf("Magic SquareNum") > -1) {this.Make_Magic_Square()}
		    if (impMods.indexOf("ALW") > -1) {this.Make_ALW()}
		    if (impMods.indexOf("KFW") > -1) {this.Make_KFW()}
		    if (impMods.indexOf("LCH") > -1) {this.Make_LCH()}
		    if (impMods.indexOf("Bacon") > -1) {this.Make_Bacon()}
		    if (impMods.indexOf("Baconis") > -1) {this.Make_Baconis()}
		        if (impMods.indexOf("37Num") > -1) {this.Make_37()}
                if (impMods.indexOf("73Num") > -1) {this.Make_73()}
                if (impMods.indexOf("12Num") > -1) {this.Make_12()}
                if (impMods.indexOf("28Num") > -1) {this.Make_28()}
                if (impMods.indexOf("64Num") > -1) {this.Make_64()}
                if (impMods.indexOf("Reverse 12Num") > -1) {this.Make_Reverse_12()}
                if (impMods.indexOf("142857Num") > -1) {this.Make_142857()}

                if (impMods.indexOf("Old TestamentNum") > -1) {this.Make_Old_Testament()}
                if (impMods.indexOf("New TestamentNum") > -1) {this.Make_New_Testament()}
                if (impMods.indexOf("343Num") > -1) {this.Make_343()}
                if (impMods.indexOf("3 Times and 7 TimesNum") > -1) {this.Make_3_Times_and_7_Times()}


                if (impMods.indexOf("JXNDNum") > -1) {this.Make_JXND()}
                if (impMods.indexOf("EnigmaNum") > -1) {this.Make_Enigma()}
                if (impMods.indexOf("777Num") > -1) {this.Make_777()}	
                if (impMods.indexOf("49Num") > -1) {this.Make_49()}
                if (impMods.indexOf("369Num") > -1) {this.Make_369()}
                if (impMods.indexOf("SequenceNum") > -1) {this.Make_Sequence()}
                if (impMods.indexOf("𝛑Num") > -1) {this.Make_𝛑()}
                if (impMods.indexOf("FibonacciNum") > -1) {this.Make_Fibonacci()}
                if (impMods.indexOf("Golden RatioNum") > -1) {this.Make_Golden_Ratio()}
                	if (impMods.indexOf("SwastikaNum") > -1) {this.Make_Swastika()}

                    if (impMods.indexOf("HappyNum") > -1) {this.Make_Happy()}


                if (impMods.indexOf("AngelsNum") > -1) {this.Make_Angels()}
		if (impMods.indexOf("Numerology") > -1) {this.Reduce_Full()}
		if (impMods.indexOf("SingleReduction") > -1) {this.Reduce_Single()}
		if (impMods.indexOf("Extend") > -1) {this.Extend()}
		if (impMods.indexOf("PrimeNum") > -1) {this.Make_Primes()}
		if (impMods.indexOf("TriangularNum") > -1) {this.Make_Triangular()}
                if (impMods.indexOf("PentagonalNum") > -1) {this.Make_Pentagonal()}
                if (impMods.indexOf("HexagonalNum") > -1) {this.Make_Hexagonal()}
                if (impMods.indexOf("HeptagonalNum") > -1) {this.Make_Heptagonal()}
                if (impMods.indexOf("Centered HexagonNum") > -1) {this.Make_Centered_Hexagon()}
                if (impMods.indexOf("Centered TriangleNum") > -1) {this.Make_Centered_Triangle()}
                if (impMods.indexOf("Centered SquareNum") > -1) {this.Make_Centered_Square()}
                if (impMods.indexOf("Centered HeptagonNum") > -1) {this.Make_Centered_Heptagon()}
                if (impMods.indexOf("Centered PentagonNum") > -1) {this.Make_Centered_Pentagon()}
                if (impMods.indexOf("Star PentagramNum") > -1) {this.Make_Star_Pentagram()}
                if (impMods.indexOf("Star HexagramNum") > -1) {this.Make_Star_Hexagram()}
                if (impMods.indexOf("Star HeptagramNum") > -1) {this.Make_Star_Heptagram()}

                if (impMods.indexOf("OctagonNum") > -1) {this.Make_Octagon()} 

                if (impMods.indexOf("HexahedronNum") > -1) {this.Make_Hexahedron()}
                if (impMods.indexOf("TetrahedronNum") > -1) {this.Make_Tetrahedron()}
                if (impMods.indexOf("OctahedronNum") > -1) {this.Make_Octahedron()}
                if (impMods.indexOf("DodecahedronNum") > -1) {this.Make_Dodecahedron()}
                if (impMods.indexOf("IcosahedronNum") > -1) {this.Make_Icosahedron()}

                if (impMods.indexOf("Hour GlassNum") > -1) {this.Make_Hour_Glass()}
                if (impMods.indexOf("CrossNum") > -1) {this.Make_Cross()}
                if (impMods.indexOf("Soccer BallNum") > -1) {this.Make_Soccer_Ball()} 

                if (impMods.indexOf("Musical NotesNum") > -1) {this.Make_Musical_Notes()}    

                
                if (impMods.indexOf("Portuguese CardinalNum") > -1) {this.Make_Portuguese_Cardinal()}
                if (impMods.indexOf("English CardinalNum") > -1) {this.Make_English_Cardinal()}

                if (impMods.indexOf("Portuguese OrdinalNum") > -1) {this.Make_Portuguese_Ordinal()}
                if (impMods.indexOf("English OrdinalNum") > -1) {this.Make_English_Ordinal()}

                if (impMods.indexOf("Brazil StatesNum") > -1) {this.Make_Brazil_States()}

                if (impMods.indexOf("PyramidNum") > -1) {this.Make_Pyramid()}
                if (impMods.indexOf("CubeNum") > -1) {this.Make_Cube()}
                	

		if (impMods.indexOf("SquareNum") > -1) {this.Make_Squares()}
		if (impMods.indexOf("2Num") > -1) {this.Make_2()}
		if (impMods.indexOf("7Num") > -1) {this.Make_7()}
			if (impMods.indexOf("8Num") > -1) {this.Make_8()}
				if (impMods.indexOf("137Num") > -1) {this.Make_137()}
                if (impMods.indexOf("77Num") > -1) {this.Make_77()}
                if (impMods.indexOf("Zig-Zag INum") > -1) {this.Make_Zig_Zag_I()}
                if (impMods.indexOf("Zig-Zag IINum") > -1) {this.Make_Zig_Zag_II()}


                if (impMods.indexOf("SumerianNum") > -1) {this.Make_Sumerian()}	
                	if (impMods.indexOf("HebrewNum") > -1) {this.Make_Hebrew()}
                		if (impMods.indexOf("GreekNum") > -1) {this.Make_Greek()}




	}

	Gematria(impVal, impType, wLink = false, impHistory = false) {
		var cIndex, x, z, tStr, GemTotal
		GemTotal = 0; this.cp = []; this.cv = []
		for (x = 0; x < impVal.length; x++) {
			z = impVal.charCodeAt(x);
			cIndex = this.cArr.indexOf(z)
			if (cIndex > -1) {GemTotal += this.vArr[cIndex]} else {
				cIndex = this.cArr2.indexOf(z)
				if (cIndex > -1) {GemTotal += this.vArr2[cIndex]} else {
					cIndex = this.cArr3.indexOf(z)
					if (cIndex > -1) {GemTotal += this.vArr3[cIndex]}
				}
			}
		}

		if (opt_NumCalculation == "Reduced") {
			for (x = 0; x < impVal.length; x++) {
				z = impVal.charCodeAt(x);
				if (z > 47 && z < 58) {
					GemTotal += z - 48
				}
			}
		} else if (opt_NumCalculation == "Full" || NumberArray() == true) {
			var curNum = ""
			var kArr = [48,49,50,51,52,53,54,55,56,57]
			var nArr = [0,1,2,3,4,5,6,7,8,9]
			for (x = 0; x < impVal.length; x++) {
				z = impVal.charCodeAt(x);
				if (kArr.indexOf(z) > -1)  {
					curNum = String(curNum) + String(nArr[kArr.indexOf(z)])
				} else if (curNum.length > 0 && z !== 44) {
					GemTotal += Number(curNum)
					curNum = ""
				}
			}
			if (curNum.length > 0) {
				GemTotal += Number(curNum)
			}
		}

		if (GemTotal > 999999) {
			return ">1 mil"
		} else if (impType == 1) {
			return GemTotal
		} else {
			if (impHistory == false && GemTotal > 0 && GemTotal < 10000000) {
				if (wLink == true || this.Nickname == breakCipher) {
					tStr = '<a href="javascript:Open_Properties(' + GemTotal + ')" onmouseover="javascript:Populate_Breakdown('
					tStr += "'" + this.Nickname + "', false"
					tStr += ')" onmouseout="Populate_Breakdown()">' + GemTotal + '</a>'
				} else if (wLink == "NoHeader" && impHistory == false) {
					tStr = '<a href="javascript:Populate_Breakdown('
					tStr += "'" + this.Nickname + "', true"
					tStr += ')" onmouseover="javascript:Populate_Breakdown('
					tStr += "'" + this.Nickname + "', false"
					tStr += ')" onmouseout="Populate_Breakdown()">' + GemTotal + '</a>'
				} else {
					tStr = GemTotal
				}
			} else {
				tStr = GemTotal
			}

			if (impHistory == false && opt_Reduce == true && GemTotal > 0) {
				tStr += '<font style="font-size: 50%"><BR>' + ReducedNum(GemTotal, true) + '</font>'
			}
			return tStr
		}
	}

Breakdown(impVal) {
		var x, z, cIndex, wordSum
		var lastSpace = true
		
		this.cp = []; this.cv = []; this.curNum = ""; this.LetterCount = 0

		this.sumArr = []; wordSum = 0
		for (x = 0; x < impVal.length; x++) {

			z = impVal.charCodeAt(x);

			if (z > 47 && z < 58) {
				if (opt_NumCalculation == "Full") {
					this.curNum = String(this.curNum) + String(z - 48)
					if (lastSpace == false) {
						this.cp.push(" ")
						this.cv.push(" ")
						this.sumArr.push(wordSum)
						wordSum = 0
						lastSpace = true
					}
				} else if (opt_NumCalculation == "Reduced") {
					this.cp.push("num" + String(z - 48))
					this.cv.push(z - 48)
					this.curNum = String(z - 48)
					wordSum += z - 48
					lastSpace = false
				}

			} else {
				if (opt_NumCalculation == "Full") {
					if (this.curNum.length > 0 & z !== 44) {
						this.cp.push("num" + String(this.curNum), " ")
						this.cv.push(Number(this.curNum), " ")
						this.sumArr.push(Number(this.curNum))
						this.curNum = ""
					}
				}
				
                              	
				cIndex = this.cArr.indexOf(z)
					if (cIndex > -1) {lastSpace = false; wordSum += this.vArr[cIndex]; this.cp.push(z); this.LetterCount++; this.cv.push(this.vArr[cIndex])} else {
						cIndex = this.cArr2.indexOf(z)
						if (cIndex > -1) {lastSpace = false; wordSum += this.vArr2[cIndex]; this.cp.push(z); this.LetterCount++; this.cv.push(this.vArr2[cIndex])} else {
							cIndex = this.cArr3.indexOf(z)
							if (cIndex > -1) {lastSpace = false; wordSum += this.vArr3[cIndex]; this.cp.push(z); this.LetterCount++; this.cv.push(this.vArr3[cIndex])
							} else if (z !== 39 && lastSpace == false) {
								this.sumArr.push(wordSum)
								wordSum = 0
								this.cp.push(" ")
								this.cv.push(" ")
								lastSpace = true
							}
						}
					}
				}
			}
					
		
		if (lastSpace == false) {this.sumArr.push(wordSum)}
		if (this.curNum !== "") {
			if (opt_NumCalculation == "Full") {
				this.cp.push("num" + String(this.curNum))
				this.cv.push(Number(this.curNum))
				this.sumArr.push(Number(this.curNum))
				if (this.sumArr.length > 1) {this.cp.push(" "); this.cv.push(" ")}
			}
		}
		if (this.sumArr.length > 1 && lastSpace == false) {this.cp.push(" "); this.cv.push(" ")}

                 this.WordCount = this.sumArr.length
	}



	Make_Bacon() {
		var tempArr = []
		var tempArr2 = []
		var x
		for (x = 0; x < this.vArr.length; x++) {
			tempArr.push(this.vArr[x])
			tempArr2.push(this.cArr[x])
		}
		for (x = 0; x < this.vArr2.length; x++) {
			tempArr.push(this.vArr2[x] + this.cArr2.length)
			tempArr2.push(this.cArr2[x])
		}
		this.vArr2 = []; this.cArr2 = []
		for (x = 0; x < tempArr.length; x++) {
			this.vArr[x] = tempArr[x]
			this.cArr[x] = tempArr2[x]
		}
	}
	Make_Baconis() {
		var tempArr = []
		var tempArr2 = []
		var x
		for (x = 0; x < this.vArr.length; x++) {
			tempArr.push((this.vArr2[x] * 2) - 1)
			tempArr.push(this.vArr[x] * 2)
			tempArr2.push(this.cArr2[x])
			tempArr2.push(this.cArr[x])
		}
		this.vArr2 = []; this.cArr2 = []
		for (x = 0; x < tempArr.length; x++) {
			this.vArr[x] = tempArr[x]
			this.cArr[x] = tempArr2[x]
		}
	}

	Reverse_Order() {
		this.cArr.reverse()
		this.cArr2.reverse()
	}

	Reduce_Full() {
		var x, tDig

		for (x = 0; x < this.vArr.length; x++) {
			tDig = this.vArr[x]
			while (isReduced(tDig, this.Exception) === false) {
				tDig = ReducedNum(tDig)
			}
			this.vArr[x] = tDig
		}

		if (this.vArr2.length > 0) {
			for (x = 0; x < this.vArr2.length; x++) {
				tDig = this.vArr2[x]
				while (isReduced(tDig, this.Exception) === false) {
					tDig = ReducedNum(tDig)
				}
				this.vArr2[x] = tDig
			}
		}

		if (this.vArr3.length > 0) {
			for (x = 0; x < this.vArr3.length; x++) {
				tDig = this.vArr3[x]
				while (isReduced(tDig, this.Exception) === false) {
					tDig = ReducedNum(tDig)
				}
				this.vArr3[x] = tDig
			}
		}
	}

	Reduce_Single() {
		var x, tDig

		for (x = 0; x < this.vArr.length; x++) {
			tDig = this.vArr[x]
			if (isReduced(tDig, this.Exception) === false) {
				this.vArr[x] = ReducedNum(tDig)
			}
		}
		for (x = 0; x < this.vArr2.length; x++) {
			tDig = this.vArr2[x]
			if (isReduced(tDig, this.Exception) === false) {
				this.vArr2[x] = ReducedNum(tDig)
			}
		}
		for (x = 0; x < this.vArr3.length; x++) {
			tDig = this.vArr3[x]
			if (isReduced(tDig, this.Exception) === false) {
				this.vArr3[x] = ReducedNum(tDig)
			}
		}
	}
	Extend() {
		var tDig, numZero, x
		for (x = 0; x < this.vArr.length; x++) {
			tDig = String(this.vArr[x])
			if (tDig > 9) {numZero = Number(tDig.substring(0, 1))} else {numZero = 0}
			while (tDig > 9) {
				tDig = ReducedNum(tDig, false, true)
				if (tDig > 9) {numZero++}
			}
			this.vArr[x] = tDig * (Math.pow(10, numZero))
		}
		for (x = 0; x < this.vArr2.length; x++) {
			tDig = String(this.vArr2[x])
			if (tDig > 9) {numZero = Number(tDig.substring(0, 1))} else {numZero = 0}
			while (tDig > 9) {
				tDig = ReducedNum(tDig, false, true)
				if (tDig > 9) {numZero++}
			}
			this.vArr2[x] = tDig * (Math.pow(10, numZero))
		}
		for (x = 0; x < this.vArr3.length; x++) {
			tDig = String(this.vArr3[x])
			if (tDig > 9) {numZero = Number(tDig.substring(0, 1))} else {numZero = 0}
			while (tDig > 9) {
				tDig = ReducedNum(tDig, false, true)
				if (tDig > 9) {numZero++}
			}
			this.vArr3[x] = tDig * (Math.pow(10, numZero))
		}
	}
	Fold() {
		var x
		if (this.vArr.length = 26) {
			for (x = 13; x < this.vArr.length; x++) {
				this.vArr[x] = 13 - [x - 13]
			}
			if (this.vArr2.length > 0) {
				if (this.vArr2.length = 26) {
					for (x = 13; x < this.vArr2.length; x++) {
						this.vArr2[x] = 13 - [x - 13]
					}
				}
			}
		}
		if (this.vArr.length = 27) {
			for (x = 14; x < this.vArr.length; x++) {
				this.vArr[x] = 13 - [x - 14]
			}
			if (this.vArr2.length > 0) {
				if (this.vArr2.length = 26) {
					for (x = 14; x < this.vArr2.length; x++) {
						this.vArr2[x] = 13 - [x - 14]
					}
				}
			}
		}
	}
	Make_37() {
		var x
		for (x = 0; x < this.vArr.length; x++) {
			this.vArr[x] += 36
		}
		if (this.vArr2.length > 0) {
			for (x = 0; x < this.vArr2.length; x++) {
				this.vArr2[x] += 36
			}
		}
		if (this.vArr3.length > 0) {
			for (x = 0; x < this.vArr3.length; x++) {
				this.vArr3[x] += 36
			}
		}
	}
	Make_73() {
		var x
		for (x = 0; x < this.vArr.length; x++) {
			this.vArr[x] += 72
		}
		if (this.vArr2.length > 0) {
			for (x = 0; x < this.vArr2.length; x++) {
				this.vArr2[x] += 72
			}
		}
		if (this.vArr3.length > 0) {
			for (x = 0; x < this.vArr3.length; x++) {
				this.vArr3[x] += 72
			}
		}
	}
       	Make_49() {
		var x
		for (x = 0; x < this.vArr.length; x++) {
			this.vArr[x] += 48
		}
		if (this.vArr2.length > 0) {
			for (x = 0; x < this.vArr2.length; x++) {
				this.vArr2[x] += 48
			}
		}
		if (this.vArr3.length > 0) {
			for (x = 0; x < this.vArr3.length; x++) {
				this.vArr3[x] += 48
			}
		}
	}
      

	Make_ALW() {
		this.cArr = [97, 108, 119, 104, 115, 100, 111, 112, 107, 118, 103, 114, 99, 110, 121, 106, 117, 102, 113, 98, 109, 120, 105, 116, 101, 122]
		this.cArr2 = [65, 76, 87, 72, 83, 68, 79, 90, 75, 86, 71, 82, 67, 78, 89, 74, 85, 70, 81, 66, 77, 88, 73, 84, 69, 80]
	}
	Make_KFW() {
		this.cArr = [107, 102, 119, 114, 109, 100, 121, 116, 97, 118, 113, 104, 99, 120, 111, 106, 101, 108, 103, 98, 115, 110, 105, 122, 117, 112]
		this.cArr2 = [75, 70, 87, 82, 77, 68, 89, 84, 65, 86, 81, 72, 67, 88, 79, 74, 69, 76, 71, 66, 83, 78, 73, 90, 85, 80]
	}
	Make_LCH() {
		var x
		this.cArr = [105, 108, 99, 104, 112, 97, 120, 106, 119, 116, 111, 103, 102, 101, 114, 115, 113, 107, 121, 122, 98, 109, 118, 100, 110, 117]
		this.cArr2 = [73, 76, 67, 72, 80, 65, 88, 74, 87, 84, 79, 71, 70, 69, 82, 83, 81, 75, 89, 90, 66, 77, 86, 68, 78, 85]
		for (x = 0; x < this.cArr.length; x++) {
			this.vArr[x] = x
			this.vArr2[x] = x
		}
	}
	Make_Primes() {
		var x
		for (x = 0; x < this.vArr.length; x++) {
			this.vArr[x] = primeArr[this.vArr[x] - 1]
		}
		if (this.vArr2.length > 0) {
			for (x = 0; x < this.vArr2.length; x++) {
				this.vArr2[x] = primeArr[this.vArr2[x] - 1]
			}
		}
		if (this.vArr3.length > 0) { 
			for (x = 0; x < this.vArr3.length; x++) {
				this.vArr3[x] = primeArr[this.vArr3[x] - 1]
			}
		}
	}
	Make_Triangular() {
		var x
		this.vArr[0] = 1
		for (x = 0; x < this.vArr.length; x++) {
			this.vArr[x] = this.vArr[x] * (this.vArr[x] + 1) / 2
		}
		if (this.vArr2.length > 0) {
			for (x = 0; x < this.vArr2.length; x++) {
				this.vArr2[x] = this.vArr2[x] * (this.vArr2[x] + 1) / 2
			}
		}
		if (this.vArr3.length > 0) {
			for (x = 0; x < this.vArr3.length; x++) {
				this.vArr3[x] = this.vArr3[x] * (this.vArr3[x] + 1) / 2
			}
		}
	}
	Make_Squares() {
		var x
		for (x = 0; x < this.vArr.length; x++) {
			this.vArr[x] = this.vArr[x] * this.vArr[x]
		}
		if (this.vArr2.length > 0) {
			for (x = 0; x < this.vArr2.length; x++) {
				this.vArr2[x] = this.vArr2[x] * this.vArr2[x]
			}
		}
		if (this.vArr3.length > 0) {
			for (x = 0; x < this.vArr3.length; x++) {
				this.vArr3[x] = this.vArr3[x] * this.vArr3[x]
			}
		}
	}
	Make_7() {
		var x
		for (x = 0; x < 26; x++) {
			this.vArr[x] = this.vArr[x] * 7
		}
		if (this.vArr2.length > 0) {
			for (x = 0; x < 26; x++) {
				this.vArr2[x] = this.vArr2[x] * 7
			}
		}
		if (this.vArr3.length > 0) {
			for (x = 0; x < 26; x++) {
				this.vArr3[x] = this.vArr3[x] * 7
			}
		}
	}
	Make_Septenary() {
		this.vArr = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1]
		}
	}
	Make_Mirror() {
		this.vArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
		}
	}
        Make_Angels() {
		this.vArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 111, 222, 333, 444, 555, 666, 777, 888]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 111, 222, 333, 444, 555, 666, 777, 888]
		}
	}
	    Make_Happy() {
		this.vArr = [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100, 103, 109, 129, 130, 133, 139]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100, 103, 109, 129, 130, 133, 139]
		}
	}
        Make_Opposite() {
		this.vArr = [12, 21, 13, 31, 14, 41, 15, 51, 16, 61, 17, 71, 18, 81, 19, 91, 102, 201, 103, 301, 104, 401, 105, 501, 106, 601]
		if (this.vArr2.length > 0) {
			this.vArr2 = [12, 21, 13, 31, 14, 41, 15, 51, 16, 61, 17, 71, 18, 81, 19, 91, 102, 201, 103, 301, 104, 401, 105, 501, 106, 601]
		}
	}
        Make_Not_Primes() {
		this.vArr = [1, 9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 75, 77, 81, 85, 87, 91, 93, 95, 99]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 75, 77, 81, 85, 87, 91, 93, 95, 99]
		}
	}
        Make_Odd_Numbers() {
		this.vArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51]
		}
	}
        Make_Even_Numbers() {
		this.vArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52]
		if (this.vArr2.length > 0) {
			this.vArr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52]
		}
    }
        Make_Composite_Numbers() {
		this.vArr = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39]
		if (this.vArr2.length > 0) {
			this.vArr2 = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39]
		}
    }
        Make_Zig_Zag_I() {
		this.vArr = [1, 15, 3, 17, 5, 19, 7, 21, 9, 23, 11, 25, 13, 14, 2, 16, 4, 18, 6, 20, 8, 22, 10, 24, 12, 26]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 15, 3, 17, 5, 19, 7, 21, 9, 23, 11, 25, 13, 14, 2, 16, 4, 18, 6, 20, 8, 22, 10, 24, 12, 26]
		}
    }
        Make_Zig_Zag_II() {
		this.vArr = [1, 25, 3, 23, 5, 21, 7, 19, 9, 17, 11, 15, 13, 26, 2, 24, 4, 22, 6, 20, 8, 18, 10, 16, 12, 14]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 25, 3, 23, 5, 21, 7, 19, 9, 17, 11, 15, 13, 26, 2, 24, 4, 22, 6, 20, 8, 18, 10, 16, 12, 14]
		}
    }
        Make_Pentagonal() {
		this.vArr = [1, 5, 12, 22, 35, 51, 70, 92, 117, 145, 176, 210, 247, 287, 330, 376, 425, 477, 532, 590, 651, 715, 782, 852, 925, 1001]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 5, 12, 22, 35, 51, 70, 92, 117, 145, 176, 210, 247, 287, 330, 376, 425, 477, 532, 590, 651, 715, 782, 852, 925, 1001]
		}
	}
        Make_Hexagonal() {
		this.vArr = [1, 6, 15, 28, 45, 66, 91, 120, 153, 190, 231, 276, 325, 378, 435, 496, 561, 630, 703, 780, 861, 946, 1035, 1128, 1225, 1326]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 6, 15, 28, 45, 66, 91, 120, 153, 190, 231, 276, 325, 378, 435, 496, 561, 630, 703, 780, 861, 946, 1035, 1128, 1225, 1326]
		}
	}
        Make_Heptagonal() {
		this.vArr = [1, 7, 18, 34, 55, 81, 112, 148, 189, 235, 286, 342, 403, 469, 540, 616, 697, 783, 874, 970, 1071, 1177, 1288, 1404, 1525, 1651]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 7, 18, 34, 55, 81, 112, 148, 189, 235, 286, 342, 403, 469, 540, 616, 697, 783, 874, 970, 1071, 1177, 1288, 1404, 1525, 1651]
		}
	}
        Make_Centered_Hexagon() {
		this.vArr = [1, 7, 19, 37, 61, 91, 127, 169, 217, 271, 331, 397, 469, 547, 631, 721, 817, 919, 1027, 1141, 1261, 1387, 1519, 1657, 1801, 1951]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 7, 19, 37, 61, 91, 127, 169, 217, 271, 331, 397, 469, 547, 631, 721, 817, 919, 1027, 1141, 1261, 1387, 1519, 1657, 1801, 1951]
		}
	}
	    Make_Star_Pentagram() {
		this.vArr = [1, 11, 31, 61, 101, 151, 211, 281, 361, 451, 551, 661, 781, 911, 1051, 1201, 1361, 1531, 1711, 1901, 2101, 2311, 2531, 2761, 3001, 3251]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 11, 31, 61, 101, 151, 211, 281, 361, 451, 551, 661, 781, 911, 1051, 1201, 1361, 1531, 1711, 1901, 2101, 2311, 2531, 2761, 3001, 3251]
		}
	}
        Make_Star_Hexagram() {
		this.vArr = [1, 13, 37, 73, 121, 181, 253, 337, 433, 541, 661, 793, 937, 1093, 1261, 1441, 1633, 1837, 2053, 2281, 2521, 2773, 3037, 3313, 3601, 3901]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 13, 37, 73, 121, 181, 253, 337, 433, 541, 661, 793, 937, 1093, 1261, 1441, 1633, 1837, 2053, 2281, 2521, 2773, 3037, 3313, 3601, 3901]
		}
	}
	    Make_Star_Heptagram() {
		this.vArr = [1,15,43,85,141,211,295,393,505,631,771,925,1093,1275,1471,1681,1905,2143,2395,2661,2941,3235,3543,3865,4201,4551]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1,15,43,85,141,211,295,393,505,631,771,925,1093,1275,1471,1681,1905,2143,2395,2661,2941,3235,3543,3865,4201,4551]
		}
	}
        Make_Octagon() {
		this.vArr = [1 , 12 , 37 , 76 , 129 , 196 , 277 , 372 , 481 , 604 , 741 , 892 , 1057 , 1236 , 1429 , 1636 , 1857 , 2092 , 2341 , 2604 , 2881 , 3172 , 3477 , 3796 , 4129 , 4476]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1 , 12 , 37 , 76 , 129 , 196 , 277 , 372 , 481 , 604 , 741 , 892 , 1057 , 1236 , 1429 , 1636 , 1857 , 2092 , 2341 , 2604 , 2881 , 3172 , 3477 , 3796 , 4129 , 4476]
		}
	}
        Make_Golden_Ratio() {
		this.vArr = [1, 6, 1, 8, 0, 3, 3, 9, 8, 8, 7, 4, 9, 8, 9, 4, 8, 4, 8, 2, 0, 4, 5, 8, 6, 8]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 6, 1, 8, 0, 3, 3, 9, 8, 8, 7, 4, 9, 8, 9, 4, 8, 4, 8, 2, 0, 4, 5, 8, 6, 8]
		}
	} 

	    Make_Tetrahedron() {
		this.vArr = [4 , 12 , 24 , 40 , 60 , 84 , 112 , 144 , 180 , 220 , 264 , 312 , 364 , 420 , 480 , 544 , 612 , 684 , 760 , 840 , 924 , 1012 , 1104 , 1200 , 1300 , 1404]
		if (this.vArr2.length > 0) {
			this.vArr2 = [4 , 12 , 24 , 40 , 60 , 84 , 112 , 144 , 180 , 220 , 264 , 312 , 364 , 420 , 480 , 544 , 612 , 684 , 760 , 840 , 924 , 1012 , 1104 , 1200 , 1300 , 1404]
		}
	}
        Make_Hexahedron() {
		this.vArr = [6,24,54,96,150,216,294,384,486,600,726,864,1014,1176,1350,1536,1734,1944,2166,2400,2646,2904,3174,3456,3750,4056]
		if (this.vArr2.length > 0) {
			this.vArr2 = [6,24,54,96,150,216,294,384,486,600,726,864,1014,1176,1350,1536,1734,1944,2166,2400,2646,2904,3174,3456,3750,4056]
		}
	}
        Make_Octahedron() {
		this.vArr = [8 , 24 , 48 , 80 , 120 , 168 , 224 , 288 , 360 , 440 , 528 , 624 , 728 , 840 , 960 , 1088 , 1224 , 1368 , 1520 , 1680 , 1848 , 2024 , 2208 , 2400 , 2600 , 2808]
		if (this.vArr2.length > 0) {
			this.vArr2 = [8 , 24 , 48 , 80 , 120 , 168 , 224 , 288 , 360 , 440 , 528 , 624 , 728 , 840 , 960 , 1088 , 1224 , 1368 , 1520 , 1680 , 1848 , 2024 , 2208 , 2400 , 2600 , 2808]
		}
	}
        Make_Dodecahedron() {
		this.vArr = [12,72 , 192 , 372 , 612 , 912 , 1272 , 1692 , 2172 , 2712 , 3312 , 3972 , 4692 , 5472 , 6312 , 7212 , 8172 , 9192 , 10272 , 11412 , 12612 , 13872 , 15192 , 16572 , 18012 , 19512]
		if (this.vArr2.length > 0) {
			this.vArr2 = [12,72 , 192 , 372 , 612 , 912 , 1272 , 1692 , 2172 , 2712 , 3312 , 3972 , 4692 , 5472 , 6312 , 7212 , 8172 , 9192 , 10272 , 11412 , 12612 , 13872 , 15192 , 16572 , 18012 , 19512]
		}
	}

       Make_Icosahedron() {
		this.vArr = [20 , 60 , 120 , 200 , 300 , 420 , 560 , 720 , 900 , 1100 , 1320 , 1560 , 1820 , 2100 , 2400 , 2720 , 3060 , 3420 , 3800 , 4200 , 4620 , 5060 , 5520 , 6000 , 6500 , 7020]
		if (this.vArr2.length > 0) {
			this.vArr2 = [20 , 60 , 120 , 200 , 300 , 420 , 560 , 720 , 900 , 1100 , 1320 , 1560 , 1820 , 2100 , 2400 , 2720 , 3060 , 3420 , 3800 , 4200 , 4620 , 5060 , 5520 , 6000 , 6500 , 7020]
		}
	}

        Make_Cross() {
		this.vArr = [1,6,24,54,96,150,216,294,384,486,600,726,864,1014,1176,1350,1536,1734,1944,2166,2400,2646,2904,3174,3456,3750]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1,6,24,54,96,150,216,294,384,486,600,726,864,1014,1176,1350,1536,1734,1944,2166,2400,2646,2904,3174,3456,3750]
		}
	}
	    Make_Swastika() {
		this.vArr = [1,17 , 68 , 153 , 272 , 425 , 612 , 833 , 1088 , 1377 , 1700 , 2057 , 2448 , 2873 , 3332 , 3825 , 4352 , 4913 , 5508 , 6137 , 6800 , 7497 , 8228 , 8993 , 9792 , 10625]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1,17 , 68 , 153 , 272 , 425 , 612 , 833 , 1088 , 1377 , 1700 , 2057 , 2448 , 2873 , 3332 , 3825 , 4352 , 4913 , 5508 , 6137 , 6800 , 7497 , 8228 , 8993 , 9792 , 10625]
		}
	}
        Make_Hour_Glass() {
		this.vArr = [1,5,11,19,29,41,55,71,89,109,131,155,181,209,239,271,305,341,379,419,461,505,551,599,649,701]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1,5,11,19,29,41,55,71,89,109,131,155,181,209,239,271,305,341,379,419,461,505,551,599,649,701]
		}
	}
        Make_Soccer_Ball() {
		this.vArr = [32 , 92 , 332 , 752 , 1352 , 2132 , 3092 , 4232 , 5552 , 7052 , 8732 , 10592 , 12632 , 14852 , 17252 , 19832 , 22592 , 25532 , 28652 , 31952 , 35432 , 39092 , 42932 , 46952 , 51152 , 55532]
		if (this.vArr2.length > 0) {
			this.vArr2 = [32 , 92 , 332 , 752 , 1352 , 2132 , 3092 , 4232 , 5552 , 7052 , 8732 , 10592 , 12632 , 14852 , 17252 , 19832 , 22592 , 25532 , 28652 , 31952 , 35432 , 39092 , 42932 , 46952 , 51152 , 55532]
		}
	}
	    Make_Musical_Notes() {
		this.vArr = [19,23,22,7,46,13,28,19,23,22,7,46,13,28,19,23,22,7,46,13,28,19,23,22,7,46]
		if (this.vArr2.length > 0) {
			this.vArr2 = [19,23,22,7,46,13,28,19,23,22,7,46,13,28,19,23,22,7,46,13,28,19,23,22,7,46]
		}
	}


	     Make_Pyramid() {
		this.vArr = [1, 5, 14, 30, 55, 91, 140, 204, 285, 385, 506, 650, 819, 1015, 1240, 1496, 1785, 2109, 2470, 2870, 3311, 3795, 4324, 4900, 5525, 6201]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 5, 14, 30, 55, 91, 140, 204, 285, 385, 506, 650, 819, 1015, 1240, 1496, 1785, 2109, 2470, 2870, 3311, 3795, 4324, 4900, 5525, 6201]
		}
	}
	     Make_Cube() {
		this.vArr = [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625, 17576]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625, 17576]
		}
	}
	    Make_Portuguese_Cardinal() {
		this.vArr = [34,47,62,92,44,52,49,59,56,35,60,50,74,88,82,111,108,94,96,70,109,122,137,167,119,127]
		if (this.vArr2.length > 0) {
			this.vArr2 = [34,47,62,92,44,52,49,59,56,35,60,50,74,88,82,111,108,94,96,70,109,122,137,167,119,127]
		}
	}
	    Make_English_Cardinal() {
		this.vArr = [34,58,56,60,42,52,65,49,42,39,63,87,99,104,65,96,109,73,86,107,141,165,163,167,149,159]
		if (this.vArr2.length > 0) {
			this.vArr2 = [34,58,56,60,42,52,65,49,42,39,63,87,99,104,65,96,109,73,86,107,141,165,163,167,149,159]
		}
	}
	Make_Portuguese_Ordinal() {
		this.vArr = [103,85,93,92,96,83,81,82,58,49,152,134,142,141,145,132,130,131,107,99,202,184,192,191,195,182]
		if (this.vArr2.length > 0) {
			this.vArr2 = [103,85,93,92,96,83,81,82,58,49,152,134,142,141,145,132,130,131,107,99,202,184,192,191,195,182]
		}
	}
	    Make_English_Ordinal() {
		this.vArr = [72,60,59,88,49,80,93,57,65,67,91,94,127,132,93,124,137,101,114,124,179,167,166,195,156,187]
		if (this.vArr2.length > 0) {
			this.vArr2 = [72,60,59,88,49,80,93,57,65,67,91,94,127,132,93,124,137,101,114,124,179,167,166,195,156,187]
		}
	}
	Make_Roman() {
		this.vArr = [9,18,27,31,22,31,40,49,33,24,33,42,51,55,46,55,64,73,57,48,57,66,75,79,70,79]
		if (this.vArr2.length > 0) {
			this.vArr2 = [9,18,27,31,22,31,40,49,33,24,33,42,51,55,46,55,64,73,57,48,57,66,75,79,70,79]
		}
	}
	Make_Keyboard_I() {
		this.vArr = [11,24,22,13,3,14,15,16,8,17,18,19,26,25,9,10,1,4,12,5,7,23,2,21,6,20]
		if (this.vArr2.length > 0) {
			this.vArr2 = [11,24,22,13,3,14,15,16,8,17,18,19,26,25,9,10,1,4,12,5,7,23,2,21,6,20]
		}
	}
	Make_Keyboard_II() {
		this.vArr = [17,23,5,18,20,25,21,9,15,16,1,19,4,6,7,8,10,11,12,26,24,3,22,2,14,13]
		if (this.vArr2.length > 0) {
			this.vArr2 = [17,23,5,18,20,25,21,9,15,16,1,19,4,6,7,8,10,11,12,26,24,3,22,2,14,13]
		}
	}
	Make_Keyboard_III() {
		this.vArr = [1,5,3,3,3,4,5,6,8,7,8,9,7,6,9,0,1,4,2,5,7,4,2,2,6,1]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1,5,3,3,3,4,5,6,8,7,8,9,7,6,9,0,1,4,2,5,7,4,2,2,6,1]
		}
	}
	Make_Reverse_Keyboard() {
		this.vArr = [0,6,8,8,8,7,6,5,3,4,3,2,4,5,2,1,0,7,9,6,4,7,9,9,5,0]
		if (this.vArr2.length > 0) {
			this.vArr2 = [0,6,8,8,8,7,6,5,3,4,3,2,4,5,2,1,0,7,9,6,4,7,9,9,5,0]
		}
	}
    Make_Phone_Number() {
		this.vArr = [2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,9]
		if (this.vArr2.length > 0) {
			this.vArr2 = [2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,9]
		}
	}
	    Make_Brazil_States() {
		this.vArr = [4,13,17,14,3,8,24,22,14,33,32,20,17,18,34,21,25,28,32,37,33,36,22,35,24,35]
		if (this.vArr2.length > 0) {
			this.vArr2 = [4,13,17,14,3,8,24,22,14,33,32,20,17,18,34,21,25,28,32,37,33,36,22,35,24,35]
		}
	}
        Make_Centered_Heptagon() {
		this.vArr = [1, 8, 22, 43, 71, 106, 148, 197, 253, 316, 386, 463, 547, 638, 736, 841, 953, 1072, 1198, 1331, 1471, 1618, 1772, 1933, 2101, 2276]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 8, 22, 43, 71, 106, 148, 197, 253, 316, 386, 463, 547, 638, 736, 841, 953, 1072, 1198, 1331, 1471, 1618, 1772, 1933, 2101, 2276]
		}
	}
        Make_Centered_Square() {
		this.vArr = [1, 5, 13, 25, 41, 61, 85, 113, 145, 181, 221, 265, 313, 365, 421, 481, 545, 613, 685, 761, 841, 925, 1013, 1105, 1201, 1301]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 5, 13, 25, 41, 61, 85, 113, 145, 181, 221, 265, 313, 365, 421, 481, 545, 613, 685, 761, 841, 925, 1013, 1105, 1201, 1301]
		}
	}
        Make_Centered_Triangle() {
		this.vArr = [1, 4, 10, 19, 31, 46, 64, 85, 109, 136, 166, 199, 235, 274, 316, 361, 409, 460, 514, 571, 631, 694, 760, 829, 901, 976]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 4, 10, 19, 31, 46, 64, 85, 109, 136, 166, 199, 235, 274, 316, 361, 409, 460, 514, 571, 631, 694, 760, 829, 901, 976]
		}
	}
        Make_Centered_Pentagon() {
		this.vArr = [1, 6, 16, 31, 51, 76, 106, 141, 181, 226, 276, 331, 391, 456, 526, 601, 681, 766, 856, 951, 1051, 1156, 1266, 1381, 1501, 1626]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 6, 16, 31, 51, 76, 106, 141, 181, 226, 276, 331, 391, 456, 526, 601, 681, 766, 856, 951, 1051, 1156, 1266, 1381, 1501, 1626]
		}
	}
        Make_Xnc_Ymd() {
		this.vArr = [3, 7, 37, 73, 137, 173, 347, 173, 137, 73, 37, 7, 3, 3, 7, 37, 73, 137, 173, 347, 173, 137, 73, 37, 7, 3]
		if (this.vArr2.length > 0) {
			this.vArr2 = [3, 7, 37, 73, 137, 173, 347, 173, 137, 73, 37, 7, 3, 3, 7, 37, 73, 137, 173, 347, 173, 137, 73, 37, 7, 3]
		}
	}
        Make_Lost() {
		this.vArr = [4, 8, 15, 16, 23, 42, 4, 8, 15, 16, 23, 42, 4, 8, 15, 16, 23, 42, 4, 8, 15, 16, 23, 42, 4, 8]
		if (this.vArr2.length > 0) {
			this.vArr2 = [4, 8, 15, 16, 23, 42, 4, 8, 15, 16, 23, 42, 4, 8, 15, 16, 23, 42, 4, 8, 15, 16, 23, 42, 4, 8]
		}
	}
        Make_Magic_Square() {
		this.vArr = [15, 34, 65, 111, 175, 260, 369, 505, 671, 870, 1105, 1379, 1695, 2056, 2465, 2925, 3439, 4010, 4641, 5335, 6095, 6924, 7825, 8801, 9855, 10990]
		if (this.vArr2.length > 0) {
			this.vArr2 = [15, 34, 65, 111, 175, 260, 369, 505, 671, 870, 1105, 1379, 1695, 2056, 2465, 2925, 3439, 4010, 4641, 5335, 6095, 6924, 7825, 8801, 9855, 10990]
		}
	}
        Make_Sequence() {
		this.vArr = [5, 11, 19, 29, 41, 55, 71, 89, 109, 131, 155, 181, 209, 239, 271, 305, 341, 379, 419, 461, 505, 551, 599, 649, 701, 755]
		if (this.vArr2.length > 0) {
			this.vArr2 = [5, 11, 19, 29, 41, 55, 71, 89, 109, 131, 155, 181, 209, 239, 271, 305, 341, 379, 419, 461, 505, 551, 599, 649, 701, 755]
		}
	}        
        Make_𝛑() {
		this.vArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3]
		if (this.vArr2.length > 0) {
			this.vArr2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3]
		}
	}
        Make_Fibonacci() {
		this.vArr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393]
		}
	}
        Make_369() {
		this.vArr = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78]
		if (this.vArr2.length > 0) {
			this.vArr2 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78]
		}
	}
        Make_77() {
		this.vArr = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
		if (this.vArr2.length > 0) {
			this.vArr2 = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
		}
	}
        Make_12() {
		this.vArr = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
		if (this.vArr2.length > 0) {
			this.vArr2 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
		}
	}
        Make_28() {
		this.vArr = [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
		if (this.vArr2.length > 0) {
			this.vArr2 = [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
		}
	}
        Make_64() {
		this.vArr = [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89]
		if (this.vArr2.length > 0) {
			this.vArr2 = [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89]
		}
	}
	Make_2() {
		this.vArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
		if (this.vArr2.length > 0) {
			this.vArr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
		}
	}
	Make_Sumerian() {
		this.vArr = [6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156]
		if (this.vArr2.length > 0) {
			this.vArr2 = [6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156]
		}
	}
    Make_Hebrew() {
		this.vArr = [1,2,60,4,0,90,3,5,10,9,20,30,40,50,70,80,100,200,300,400,0,6,6,8,10,7]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1,2,60,4,0,90,3,5,10,9,20,30,40,50,70,80,100,200,300,400,0,6,6,8,10,7]
		}
	}
    Make_Greek() {
		this.vArr = [1,2,60,4,5,500,3,8,10,0,20,30,40,50,70,80,9,100,200,300,400,6,800,600,700,7]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1,2,60,4,5,500,3,8,10,0,20,30,40,50,70,80,9,100,200,300,400,6,800,600,700,7]
		}
	}
	    Make_8() {
		this.vArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
		if (this.vArr2.length > 0) {
			this.vArr2 = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
		}
	}
	    Make_137() {
		this.vArr = [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162]
		if (this.vArr2.length > 0) {
			this.vArr2 = [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162]
		}
	}
	    Make_Formula_II() {
		this.vArr = [43, 89, 139, 193, 251, 313, 379, 449, 523, 601, 683, 769, 859, 953, 1051, 1153, 1259, 1369, 1483, 1601, 1723, 1849, 1979, 2113, 2251, 2393]
		if (this.vArr2.length > 0) {
			this.vArr2 = [43, 89, 139, 193, 251, 313, 379, 449, 523, 601, 683, 769, 859, 953, 1051, 1153, 1259, 1369, 1483, 1601, 1723, 1849, 1979, 2113, 2251, 2393]
		}
	}
	    Make_Formula_III() {
		this.vArr = [37, 79, 127, 181, 241, 307, 379, 457, 541, 631, 727, 829, 937, 1051, 1171, 1297, 1429, 1567, 1711, 1861, 2017, 2179, 2347, 2521, 2701, 2887]
		if (this.vArr2.length > 0) {
			this.vArr2 = [37, 79, 127, 181, 241, 307, 379, 457, 541, 631, 727, 829, 937, 1051, 1171, 1297, 1429, 1567, 1711, 1861, 2017, 2179, 2347, 2521, 2701, 2887]
		}
	}
	    Make_Old_Testament() {
		this.vArr = [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48]
		if (this.vArr2.length > 0) {
			this.vArr2 = [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48]
		}
	}
	    Make_New_Testament() {
		this.vArr = [28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1]
		if (this.vArr2.length > 0) {
			this.vArr2 = [28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1]
		}
	}
        Make_3_Times_and_7_Times() {
		this.vArr = [50, 40, 27, 36, 34, 21, 21, 31, 22, 25, 36, 42, 150, 31, 66, 12, 28, 16, 24, 24, 28, 13, 0, 0, 0, 0]
		if (this.vArr2.length > 0) {
			this.vArr2 = [50, 40, 27, 36, 34, 21, 21, 31, 22, 25, 36, 42, 150, 31, 66, 12, 28, 16, 24, 24, 28, 13, 0, 0, 0, 0]
		}
	}
	    Make_343() {
		this.vArr = [27, 24, 31, 25, 10, 42, 12, 52, 12, 9, 7, 3, 4, 24, 16, 6, 4, 6, 1, 5, 1, 22, 0, 0, 0, 0]
		if (this.vArr2.length > 0) {
			this.vArr2 = [27, 24, 31, 25, 10, 42, 12, 52, 12, 9, 7, 3, 4, 24, 16, 6, 4, 6, 1, 5, 1, 22, 0, 0, 0, 0]
		}
	}
	    Make_777() {
		this.vArr = [7, 264, 241, 92, 44, 73, 444, 64, 120, 72, 133, 137, 82, 80, 21, 38, 5, 233, 37, 12, 604, 265, 560, 193, 89, 732]
		if (this.vArr2.length > 0) {
			this.vArr2 = [7, 264, 241, 92, 44, 73, 444, 64, 120, 72, 133, 137, 82, 80, 21, 38, 5, 233, 37, 12, 604, 265, 560, 193, 89, 732]
		}
	}
        Make_Enigma() {
		this.vArr = [1, 23, 25, 4, 5, 17, 22, 8, 12, 2, 21, 9, 10, 14, 6, 24, 26, 13, 7, 18, 19, 20, 15, 3, 11, 16]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 23, 25, 4, 5, 17, 22, 8, 12, 2, 21, 9, 10, 14, 6, 24, 26, 13, 7, 18, 19, 20, 15, 3, 11, 16]
		}
	}
	    Make_JXND() {
		this.vArr = [8, 5, 7, 4, 2, 16, 3, 1, 12, 10, 18, 9, 23, 14, 17, 6, 15, 11, 26, 25, 22, 21, 13, 24, 20, 19]
		if (this.vArr2.length > 0) {
			this.vArr2 = [8, 5, 7, 4, 2, 16, 3, 1, 12, 10, 18, 9, 23, 14, 17, 6, 15, 11, 26, 25, 22, 21, 13, 24, 20, 19]
		}
	}
        Make_142857() {
		this.vArr = [1, 2, 4, 8, 7, 5, 1, 2, 4, 8, 7, 5, 1, 2, 4, 8, 7, 5, 1, 2, 4, 8, 7, 5, 1, 2]
		if (this.vArr2.length > 0) {
			this.vArr2 = [1, 2, 4, 8, 7, 5, 1, 2, 4, 8, 7, 5, 1, 2, 4, 8, 7, 5, 1, 2, 4, 8, 7, 5, 1, 2]
		}
	}
        Make_Formula() {
		this.vArr = [41 , 43 , 47 , 53 , 61 , 71 , 83 , 97 , 113 , 131 , 151 , 173 , 197 , 223 , 251 , 281 , 313 , 347 , 383 , 421 , 461 , 503 , 547 , 593 , 641 , 691]
		if (this.vArr2.length > 0) {
			this.vArr2 = [41 , 43 , 47 , 53 , 61 , 71 , 83 , 97 , 113 , 131 , 151 , 173 , 197 , 223 , 251 , 281 , 313 , 347 , 383 , 421 , 461 , 503 , 547 , 593 , 641 , 691]
		}
	}

}

function Build_GemVals(impCipher) {
	var x
	for (x = 0; x < impCipher.cArr.length; x++) {
		impCipher.vArr[x] = (x + 1)
	}
	if (impCipher.cArr2.length > 0) {
		for (x = 0; x < impCipher.cArr2.length; x++) {
			impCipher.vArr2[x] = (x + 1)
		}
	}
}

function Populate_Sums(impVal) {
	var x, gSum
	gemArr = []

	for (x = 0; x < ciphersOn.length; x++) {
		gemArr[x] = ciphersOn[x].Gematria(impVal, 1)
		if (opt_Headers == true) {
			gSum = ciphersOn[x].Gematria(impVal, 2, true)
		} else {
			gSum = ciphersOn[x].Gematria(impVal, 2, "NoHeader")
		}
		document.getElementById(ciphersOn[x].Nickname + "_Sum").innerHTML = gSum
	}
}

function Open_Properties(impNum) {
	if (impNum > 0 && impNum < 10000000) {
		window.open("http://www.gematrinator.com/calculator/numberProperties.php?Number=" + impNum, "Properties of " + impNum, "height=480,width=750")
	}
}

function GetTriangular(impNum) {
	var x
	x = (impNum * (impNum + 1) / 2)
	return x
}

function ReducedNum(impNum, impBool = false, impSingle = false) {
	var x, s
	var cn = 0
	var x, cn

	if (impSingle == true) {
		for (x = 0; x < String(impNum).length; x++) {
			s = Number(String(impNum).slice(x, x + 1))
			cn += s
		}
		return cn
	}

	while (impNum > 9) {
		if (impBool == true) {
			if (impNum == 11 || impNum == 22 || impNum == 33) {
				return impNum
			}
		}
		cn = 0
		for (x = 0; x < String(impNum).length; x++) {
			s = Number(String(impNum).slice(x, x + 1))
			cn += s
		}
		impNum = cn
	}

	return impNum
}
function isReduced(impNum, impOpt = false) {
	if (impNum < 10) {
		return true
	} else if (impOpt === true) {
		if (impNum === 11 || impNum === 22 || impNum === 33) {
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}

function Build_Ciphers() {
	var key

	for (key in cipherArray) {
		switch (key) {
			case "Numerology": allCiphers[allCiphers.length] = new cipher(key, "English", 88, 125, 254, "Numerology"); break;
			case "Single Reduction": allCiphers[allCiphers.length] = new cipher(key, "English", 140, 171, 227, "SingleReduction"); break;
			case "Full Reduction KV": allCiphers[allCiphers.length] = new cipher(key, "English", 97, 195, 244, "FullReduction", "Exception"); break;
			case "Single Reduction KV": allCiphers[allCiphers.length] = new cipher(key, "English", 70, 175, 244, "SingleReduction", "Exception"); break;
			case "Gematria": allCiphers[allCiphers.length] = new cipher(key, "English", 0, 186, 0); break;

            case "Portuguese Cardinal": allCiphers[allCiphers.length] = new cipher(key, "English", 178,216,255, "Portuguese CardinalNum"); break;
            case "Portuguese Ordinal": allCiphers[allCiphers.length] = new cipher(key, "English", 178,216,255, "Portuguese OrdinalNum"); break;
            
            case "English Cardinal": allCiphers[allCiphers.length] = new cipher(key, "English", 17,153,168, "English CardinalNum"); break;
            case "English Ordinal": allCiphers[allCiphers.length] = new cipher(key, "English", 17,153,168, "English OrdinalNum"); break;


            case "Hebrew": allCiphers[allCiphers.length] = new cipher(key, "English", 255,255,224, "HebrewNum"); break;
            case "Greek": allCiphers[allCiphers.length] = new cipher(key, "English", 152,251,152, "GreekNum"); break;
            case "Sumerian": allCiphers[allCiphers.length] = new cipher(key, "English", 153,0,51, "SumerianNum"); break;

            case "Reverse Hebrew": allCiphers[allCiphers.length] = new cipher(key, "English", 255,255,224, "Reverse", "HebrewNum"); break;
            case "Reverse Greek": allCiphers[allCiphers.length] = new cipher(key, "English", 152,251,152, "Reverse", "GreekNum"); break;
            case "Reverse Sumerian": allCiphers[allCiphers.length] = new cipher(key, "English", 153,0,51, "Reverse", "SumerianNum"); break;



            case "Roman": allCiphers[allCiphers.length] = new cipher(key, "English", 255,0,0, "RomanNum"); break;
            case "Reverse Roman": allCiphers[allCiphers.length] = new cipher(key, "English", 255,0,0, "Reverse", "RomanNum"); break;

            case "Keyboard I": allCiphers[allCiphers.length] = new cipher(key, "English", 220,20,60, "Keyboard INum"); break;
            case "Keyboard II": allCiphers[allCiphers.length] = new cipher(key, "English", 220,20,60, "Keyboard IINum"); break;
            case "Keyboard III": allCiphers[allCiphers.length] = new cipher(key, "English", 220,20,60, "Keyboard IIINum"); break;

            case "Phone Number": allCiphers[allCiphers.length] = new cipher(key, "English", 153,0,255, "Phone NumberNum"); break;


            case "Reverse Keyboard I": allCiphers[allCiphers.length] = new cipher(key, "English", 153,0,51, "Reverse", "Keyboard INum"); break;
            case "Reverse Keyboard II": allCiphers[allCiphers.length] = new cipher(key, "English", 153,0,51, "Reverse", "Keyboard IINum"); break;
            case "Reverse Keyboard III": allCiphers[allCiphers.length] = new cipher(key, "English", 153,0,51, "Reverse", "Keyboard IIINum"); break;


			case "English Extended": allCiphers[allCiphers.length] = new cipher(key, "English", 218, 226, 0, "Extend"); break;
			case "Francis Bacon": allCiphers[allCiphers.length] = new cipher(key, "English", 150, 244, 77, "Bacon"); break;
			case "Franc Baconis": allCiphers[allCiphers.length] = new cipher(key, "English", 93, 187, 88, "Baconis"); break;
			            case "2": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "2Num"); break;
                        case "7": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "7Num"); break;
                        case "77": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "77Num"); break; 
                        case "137": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "137Num"); break; 
                        case "8": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "8Num"); break; 
                        case "12": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "12Num"); break;
                        case "28": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "28Num"); break;
                        case "64": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "64Num"); break;
                        case "49": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "49Num"); break;
			case "37": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "37Num"); break;
                        case "73": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "73Num"); break;
                        case "369": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "369Num"); break;
                        case "142857": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "142857Num"); break;

                        case "Reverse Jewish": allCiphers[allCiphers.length] = new cipher(key, "Jewish", 153, 102, 255, "Reverse", "Extend"); break;   
			case "Reverse Numerology": allCiphers[allCiphers.length] = new cipher(key, "English", 88, 125, 254, "Reverse", "Numerology"); break;
			case "Reverse Single Reduction": allCiphers[allCiphers.length] = new cipher(key, "English", 100, 216, 209, "Reverse", "SingleReduction"); break;
			case "Reverse Full Reduction EP": allCiphers[allCiphers.length] = new cipher(key, "English", 101, 224, 194, "Reverse", "FullReduction", "Exception"); break;
			case "Reverse Single Reduction EP": allCiphers[allCiphers.length] = new cipher(key, "English", 110, 226, 156, "Reverse", "SingleReduction", "Exception"); break;
			case "Atbash": allCiphers[allCiphers.length] = new cipher(key, "English", 0,250,154, "Reverse"); break;
			case "Reverse Extended": allCiphers[allCiphers.length] = new cipher(key, "English", 253, 255, 119, "Reverse", "Extend"); break;
			case "Reverse Francis Bacon": allCiphers[allCiphers.length] = new cipher(key, "English", 163, 255, 88, "Reverse", "Bacon"); break;
			case "Reverse Franc Baconis": allCiphers[allCiphers.length] = new cipher(key, "English", 111, 193, 121, "Reverse", "Baconis"); break;
                        

                       case "Reverse Portuguese Cardinal": allCiphers[allCiphers.length] = new cipher(key, "English", 178,216,255, "Reverse", "Portuguese CardinalNum"); break;
                       case "Reverse Portuguese Ordinal": allCiphers[allCiphers.length] = new cipher(key, "English", 178,216,255, "Reverse", "Portuguese OrdinalNum"); break;

                       case "Reverse English Cardinal": allCiphers[allCiphers.length] = new cipher(key, "English", 17,153,168, "Reverse", "English CardinalNum"); break;
                       case "Reverse English Ordinal": allCiphers[allCiphers.length] = new cipher(key, "English", 17,153,168, "Reverse", "English OrdinalNum"); break;


                       case "Reverse Brazil States": allCiphers[allCiphers.length] = new cipher(key, "English", 80, 235, 21, "Reverse", "Brazil StatesNum"); break;

                        case "Reverse Formula": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Reverse", "FormulaNum"); break;
                         case "Reverse Formula II": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Reverse", "Formula IINum"); break;
                          case "Reverse Formula III": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Reverse", "Formula IIINum"); break;
	                    case "Reverse Opposite": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 209, 145, "Reverse", "OppositeNum"); break;		
                        case "Reverse Not Primes": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 209, 145, "Reverse", "Not PrimesNum"); break;
                        case "Reverse Odd Numbers": allCiphers[allCiphers.length] = new cipher(key, "English", 166, 166, 99, "Reverse", "Odd NumbersNum"); break;
                        
                        case "Reverse Phone Number": allCiphers[allCiphers.length] = new cipher(key, "English", 153,0,255, "Reverse", "Phone NumberNum"); break;
                        
                        case "Reverse Even Numbers": allCiphers[allCiphers.length] = new cipher(key, "English", 166, 166, 99, "Reverse", "Even NumbersNum"); break;
                        case "Reverse Composite Numbers": allCiphers[allCiphers.length] = new cipher(key, "English", 166, 166, 99, "Reverse", "Composite NumbersNum"); break;
                        case "Reverse Fibonacci": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Reverse", "FibonacciNum"); break;
                        case "Reverse 𝛑": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Reverse", "𝛑Num"); break;
                        case "Reverse 37": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "37Num"); break;
                        case "Reverse 73": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "73Num"); break;
                        case "Reverse 2": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "2Num"); break;
                        case "Reverse 7": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "7Num"); break;
                        case "Reverse 12": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "12Num"); break;
                        case "Reverse 64": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "64Num"); break;
                        case "Reverse 28": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "28Num"); break;
                        case "Reverse 77": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "77Num"); break;
                        case "Reverse 137": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "137Num"); break;
                        case "Reverse 8": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "8Num"); break;
                        case "Reverse 49": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "49Num"); break;
                        case "Reverse 369": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 51, 51, "Reverse", "369Num"); break;
                        case "Reverse Sequence": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Reverse", "SequenceNum"); break;
			case "Reverse Primes": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Reverse", "PrimeNum"); break;
			case "Reverse Triangular": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "TriangularNum"); break;
			case "Reverse Squares": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "SquareNum"); break;
                        case "Reverse Pentagonal": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "PentagonalNum"); break;
                        case "Reverse Hexagonal": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "HexagonalNum"); break;
                        case "Reverse Heptagonal": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "HeptagonalNum"); break;
                        case "Reverse Centered Hexagon": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "Centered HexagonNum"); break;
                        case "Reverse Centered Triangle": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "Centered TriangleNum"); break;
                        case "Reverse Centered Square": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "Centered SquareNum"); break;
                        case "Reverse Magic Square": allCiphers[allCiphers.length] = new cipher(key, "English", 255,255,255, "Reverse", "Magic SquareNum"); break;
                        case "Reverse Centered Heptagon": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "Centered HeptagonNum"); break;
                        case "Reverse Centered Pentagon": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "Centered PentagonNum"); break;
                        case "Reverse Star Pentagram": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "Star PentagramNum"); break;
                        case "Reverse Star Hexagram": allCiphers[allCiphers.length] = new cipher(key, "English", 240, 225, 112, "Reverse", "Star HexagramNum"); break;

                        case "Reverse Pyramid": allCiphers[allCiphers.length] = new cipher(key, "English", 218, 226, 0, "Reverse", "PyramidNum"); break;
                        case "Reverse Cube": allCiphers[allCiphers.length] = new cipher(key, "English", 218, 226, 0, "Reverse", "CubeNum"); break;

                       
                        case "Reverse Zig-Zag I": allCiphers[allCiphers.length] = new cipher(key, "English", 255,20,147, "Reverse", "Zig-Zag INum"); break;
                        case "Reverse Zig-Zag II": allCiphers[allCiphers.length] = new cipher(key, "English", 255,20,147, "Reverse", "Zig-Zag IINum"); break;
                        case "Reverse Angels": allCiphers[allCiphers.length] = new cipher(key, "English", 192,192,192, "Reverse", "AngelsNum"); break;

                         case "Reverse Old Testament": allCiphers[allCiphers.length] = new cipher(key, "English", 92,51,23, "Reverse", "Old TestamentNum"); break;
                         case "Reverse New Testament": allCiphers[allCiphers.length] = new cipher(key, "English", 92,51,23, "Reverse", "New TestamentNum"); break;
                         case "Reverse 343": allCiphers[allCiphers.length] = new cipher(key, "English", 92,51,23, "Reverse", "343Num"); break;
                         case "Reverse 3 Times and 7 Times": allCiphers[allCiphers.length] = new cipher(key, "English", 92,51,23, "Reverse", "3 Times and 7 TimesNum"); break;
                            
                            case "Reverse JXND": allCiphers[allCiphers.length] = new cipher(key, "English", 0, 0, 0, "Reverse", "JXNDNum"); break;
                            case "Reverse Enigma": allCiphers[allCiphers.length] = new cipher(key, "English", 0, 0, 0, "Reverse", "EnigmaNum"); break;
                            case "Reverse 777": allCiphers[allCiphers.length] = new cipher(key, "English", 0, 0, 0, "Reverse", "777Num"); break;

                         case "Brazil States": allCiphers[allCiphers.length] = new cipher(key, "English", 80, 235, 21, "Brazil StatesNum"); break;

                        case "Angels": allCiphers[allCiphers.length] = new cipher(key, "English", 192,192,192, "AngelsNum"); break;
                        case "Zig-Zag I": allCiphers[allCiphers.length] = new cipher(key, "English", 255,20,147, "Zig-Zag INum"); break;
                        case "Zig-Zag II": allCiphers[allCiphers.length] = new cipher(key, "English", 255,20,147, "Zig-Zag IINum"); break;

                        case "Old Testament": allCiphers[allCiphers.length] = new cipher(key, "English", 92,51,23, "Old TestamentNum"); break;
                        case "New Testament": allCiphers[allCiphers.length] = new cipher(key, "English", 92,51,23, "New TestamentNum"); break;
                        case "343": allCiphers[allCiphers.length] = new cipher(key, "English", 92,51,23, "343Num"); break;
                        case "3 Times and 7 Times": allCiphers[allCiphers.length] = new cipher(key, "English", 92,51,23, "3 Times and 7 TimesNum"); break;

			case "Jewish Reduction": allCiphers[allCiphers.length] = new cipher(key, "Jewish", 159, 99, 197, "FullReduction"); break;
			case "Jewish Ordinal": allCiphers[allCiphers.length] = new cipher(key, "Jewish", 154, 121, 227); break;
			case "Jewish": allCiphers[allCiphers.length] = new cipher(key, "Jewish", 153, 102, 255, "Extend"); break;

			case "ALW Kabbalah": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 64, 0, "ALW"); break;
			case "KFW Kabbalah": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 88, 0, "KFW"); break;
			case "LCH Kabbalah": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 93, 73, "LCH"); break;

                        case "JXND": allCiphers[allCiphers.length] = new cipher(key, "English", 0, 0, 0, "JXNDNum"); break;
                        case "Enigma": allCiphers[allCiphers.length] = new cipher(key, "English", 0, 0, 0, "EnigmaNum"); break;
                        case "777": allCiphers[allCiphers.length] = new cipher(key, "English", 0, 0, 0, "777Num"); break;
			case "Primes": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "PrimeNum"); break;
			case "Triangular": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "TriangularNum"); break;
			case "Squares": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "SquareNum"); break;
                        case "Pentagonal": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "PentagonalNum"); break;
                        case "Hexagonal": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "HexagonalNum"); break;
                        case "Heptagonal": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "HeptagonalNum"); break;
                        case "Centered Hexagon": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "Centered HexagonNum"); break;
                        case "Centered Heptagon": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "Centered HeptagonNum"); break;
                        case "Centered Pentagon": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "Centered PentagonNum"); break;
                        case "Centered Triangle": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "Centered TriangleNum"); break;
                        case "Centered Square": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "Centered SquareNum"); break;
                        case "Star Pentagram": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "Star PentagramNum"); break;
                        case "Star Hexagram": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "Star HexagramNum"); break;
                        case "Star Heptagram": allCiphers[allCiphers.length] = new cipher(key, "English", 228, 216, 96, "Star HeptagramNum"); break;

                       
                        case "Pyramid": allCiphers[allCiphers.length] = new cipher(key, "English", 218, 226, 0, "PyramidNum"); break;
                        case "Cube": allCiphers[allCiphers.length] = new cipher(key, "English", 218, 226, 0, "CubeNum"); break;

                        

                        case "Hexahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "HexahedronNum"); break;
                        case "Tetrahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "TetrahedronNum"); break;
                        case "Octahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "OctahedronNum"); break;
                        case "Icosahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "IcosahedronNum"); break;
                        case "Dodecahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "DodecahedronNum"); break;

                        case "Hour Glass": allCiphers[allCiphers.length] = new cipher(key, "English", 30,144,255, "Hour GlassNum"); break;
                        case "Cross": allCiphers[allCiphers.length] = new cipher(key, "English", 255,255,255, "CrossNum"); break;
                        case "Swastika": allCiphers[allCiphers.length] = new cipher(key, "English", 112,128,144, "SwastikaNum"); break;
                        case "Soccer Ball": allCiphers[allCiphers.length] = new cipher(key, "English", 0,0,128, "Soccer BallNum"); break;
 
                        case "Happy": allCiphers[allCiphers.length] = new cipher(key, "English", 240,230,140, "HappyNum"); break;
                        case "Reverse Happy": allCiphers[allCiphers.length] = new cipher(key, "English", 240,230,140, "Reverse","HappyNum"); break;
 

                        case "Musical Notes": allCiphers[allCiphers.length] = new cipher(key, "English", 80, 235, 21, "Musical NotesNum"); break;
                        case "Octagon": allCiphers[allCiphers.length] = new cipher(key, "English", 192,192,192, "OctagonNum"); break;

                        case "Reverse Musical Notes": allCiphers[allCiphers.length] = new cipher(key, "English", 80, 235, 21, "Reverse","Musical NotesNum"); break;
                        case "Reverse Octagon": allCiphers[allCiphers.length] = new cipher(key, "English", 192,192,192, "Reverse","OctagonNum"); break;

                        case "Reverse Hexahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "Reverse","HexahedronNum"); break;
                        case "Reverse Tetrahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "Reverse","TetrahedronNum"); break;
                        case "Reverse Octahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "Reverse","OctahedronNum"); break;
                        case "Reverse Icosahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "Reverse","IcosahedronNum"); break;
                        case "Reverse Dodecahedron": allCiphers[allCiphers.length] = new cipher(key, "English", 153,101,21, "Reverse","DodecahedronNum"); break;

                        case "Reverse Hour Glass": allCiphers[allCiphers.length] = new cipher(key, "English", 30,144,255, "Reverse","Hour GlassNum"); break;
                        case "Reverse Cross": allCiphers[allCiphers.length] = new cipher(key, "English", 255,255,255, "Reverse","CrossNum"); break;
                        case "Reverse Swastika": allCiphers[allCiphers.length] = new cipher(key, "English", 112,128,144, "Reverse","SwastikaNum"); break;
                        case "Reverse Soccer Ball": allCiphers[allCiphers.length] = new cipher(key, "English", 0,0,128, "Reverse","Soccer BallNum"); break;
                      







                        case "Sequence": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "SequenceNum"); break;
			case "Formula": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "FormulaNum"); break;
			case "Formula II": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Formula IINum"); break; 
			case "Formula III": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Formula IIINum"); break;   
                        case "Magic Square": allCiphers[allCiphers.length] = new cipher(key, "English", 255,255,255, "Magic SquareNum"); break;
                        case "Xnc Ymd": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 0, 0, "Xnc YmdNum"); break;
                        case "Lost": allCiphers[allCiphers.length] = new cipher(key, "English", 100, 216, 209, "LostNum"); break;

			case "Septenary": allCiphers[allCiphers.length] = new cipher(key, "English", 218, 226, 0, "SeptenaryNum"); break;
			case "Mirror": allCiphers[allCiphers.length] = new cipher(key, "English", 255,255,240, "MirrorNum"); break;
                        case "𝛑": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "𝛑Num"); break;
                        case "Fibonacci": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "FibonacciNum"); break;

                        case "Golden Ratio": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Golden RatioNum"); break;
                        case "Reverse Golden Ratio": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 189, 2, "Reverse", "Golden RatioNum"); break;  
                        



                        case "Opposite": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 209, 145, "OppositeNum"); break;
                        case "Odd Numbers": allCiphers[allCiphers.length] = new cipher(key, "English", 166, 166, 99, "Odd NumbersNum"); break;
                        case "Even Numbers": allCiphers[allCiphers.length] = new cipher(key, "English", 166, 166, 99, "Even NumbersNum"); break;
                        case "Composite Numbers": allCiphers[allCiphers.length] = new cipher(key, "English", 166, 166, 99, "Composite NumbersNum"); break;
                        case "Not Primes": allCiphers[allCiphers.length] = new cipher(key, "English", 255, 209, 145, "Not PrimesNum"); break;



			case "Chaldean": allCiphers[allCiphers.length] = new cipher(key, "Chald", 166, 166, 99); break;

                        
			case "Hebrew Reduction": allCiphers[allCiphers.length] = new cipher(key, "Hebrew G", 255, 189, 2, "FullReduction"); break;
			case "Hebrew Ordinal": allCiphers[allCiphers.length] = new cipher(key, "Hebrew G", 255, 209, 36); break;
			case "Hebrew Gematria": allCiphers[allCiphers.length] = new cipher(key, "Hebrew G", 255, 227, 93, "Extend"); break;
			case "Hebrew Soffits": allCiphers[allCiphers.length] = new cipher(key, "Hebrew Soffits", 255, 251, 156, "Extend"); break;

			case "Greek Reduction": allCiphers[allCiphers.length] = new cipher(key, "Greek", 156, 201, 171, "FullReduction"); break;
			case "Greek Ordinal": allCiphers[allCiphers.length] = new cipher(key, "Greek", 149, 199, 139); break;
			case "Greek Isopsephy": allCiphers[allCiphers.length] = new cipher(key, "Greek", 139, 200, 163, "Extend"); break;

			case "Jewish Reduction Prime": allCiphers[allCiphers.length] = new cipher(key, "Jewish", 159, 99, 197, "FullReduction", "PrimeNum"); break;
			case "Jewish Reduction Trigonal": allCiphers[allCiphers.length] = new cipher(key, "Jewish", 159, 99, 197, "FullReduction", "TriangleNum"); break;
			case "Jewish Reduction Square": allCiphers[allCiphers.length] = new cipher(key, "Jewish", 159, 99, 197, "FullReduction", "SquareNum"); break;



		}
	}

	Build_Open_Ciphers(true)
}

function Set_Categories() {
	catArr = ["Gematria", "Numbers", "Mathemagic", "Reverse", "Book of Law", "Others", "Enigma"]


	    cipherArray["Gematria"] = "Gematria"
	    cipherArray["Septenary"] = "Gematria"
        cipherArray["Jewish"] = "Gematria"
        cipherArray["Xnc Ymd"] = "Gematria"
        cipherArray["Atbash"] = "Gematria"
        //cipherArray["Greek"] = "Gematria"
        cipherArray["Numerology"] = "Gematria"
        cipherArray["Sumerian"] = "Gematria"
        cipherArray["Mirror"] = "Gematria"

        cipherArray["Portuguese Cardinal"] = "Gematria"
        cipherArray["Portuguese Ordinal"] = "Gematria"
        cipherArray["English Cardinal"] = "Gematria"
        cipherArray["English Ordinal"] = "Gematria"
        
        
        cipherArray["Roman"] = "Gematria"
        cipherArray["Keyboard I"] = "Gematria"
        cipherArray["Keyboard II"] = "Gematria"
        cipherArray["Keyboard III"] = "Gematria"
        cipherArray["Phone Number"] = "Gematria"
        cipherArray["Odd Numbers"] = "Gematria"
        cipherArray["Even Numbers"] = "Gematria"
        cipherArray["Composite Numbers"] = "Gematria"
        cipherArray["Not Primes"] = "Gematria"

        
         


        cipherArray["2"] = "Numbers"
        cipherArray["7"] = "Numbers"
        cipherArray["8"] = "Numbers"
        cipherArray["12"] = "Numbers"
        cipherArray["37"] = "Numbers"
        cipherArray["73"] = "Numbers"
        cipherArray["28"] = "Numbers"
        cipherArray["49"] = "Numbers"
        cipherArray["64"] = "Numbers"
        cipherArray["77"] = "Numbers"
        cipherArray["137"] = "Numbers"
        cipherArray["369"] = "Numbers"
        cipherArray["142857"] = "Numbers"




        cipherArray["Magic Square"] = "Mathemagic"
        cipherArray["Sequence"] = "Mathemagic"
        cipherArray["Formula"] = "Mathemagic"
        cipherArray["Formula II"] = "Mathemagic"
        cipherArray["Formula III"] = "Mathemagic"
        cipherArray["Primes"] = "Mathemagic"
        cipherArray["𝛑"] = "Mathemagic" 
        cipherArray["Golden Ratio"] = "Mathemagic"
        cipherArray["Fibonacci"] = "Mathemagic"
        cipherArray["Triangular"] = "Mathemagic"
        cipherArray["Squares"] = "Mathemagic"
        cipherArray["Pentagonal"] = "Mathemagic"
        cipherArray["Hexagonal"] = "Mathemagic"
        cipherArray["Heptagonal"] = "Mathemagic"
        cipherArray["Centered Triangle"] = "Mathemagic"
        cipherArray["Centered Square"] = "Mathemagic"
        cipherArray["Centered Pentagon"] = "Mathemagic"
        cipherArray["Centered Hexagon"] = "Mathemagic"
        cipherArray["Centered Heptagon"] = "Mathemagic"
        cipherArray["Star Pentagram"] = "Mathemagic"
        cipherArray["Star Hexagram"] = "Mathemagic"
        cipherArray["Star Heptagram"] = "Mathemagic"
        cipherArray["Pyramid"] = "Mathemagic"
        cipherArray["Cube"] = "Mathemagic"
        cipherArray["Octagon"] = "Mathemagic"
         
        cipherArray["Tetrahedron"] = "Mathemagic"
        cipherArray["Hexahedron"] = "Mathemagic"
        cipherArray["Octahedron"] = "Mathemagic"
        cipherArray["Dodecahedron"] = "Mathemagic"
        cipherArray["Icosahedron"] = "Mathemagic"

      




	    //cipherArray["Reverse Gematria"] = "Reverse"
	    cipherArray["Reverse Numerology"] = "Reverse"
	    cipherArray["Reverse Portuguese Cardinal"] = "Reverse"
	    cipherArray["Reverse Portuguese Ordinal"] = "Reverse"
	    cipherArray["Reverse English Cardinal"] = "Reverse"
	    cipherArray["Reverse English Ordinal"] = "Reverse"
	    cipherArray["Reverse Roman"] = "Reverse"
	    cipherArray["Reverse Keyboard I"] = "Reverse"
	    cipherArray["Reverse Keyboard II"] = "Reverse"
	    cipherArray["Reverse Keyboard III"] = "Reverse"
	    cipherArray["Reverse Phone Number"] = "Reverse"
        
        cipherArray["Reverse Hour Glass"] = "Reverse"
        cipherArray["Reverse Soccer Ball"] = "Reverse"
        cipherArray["Reverse Musical Notes"] = "Reverse"
        cipherArray["Reverse Cross"] = "Reverse"
        cipherArray["Reverse Swastika"] = "Reverse"
        cipherArray["Reverse Angels"] = "Reverse"
        cipherArray["Reverse Happy"] = "Reverse"



        //cipherArray["Reverse Brazil States"] = "Reverse"
	    cipherArray["Reverse Extended"] = "Reverse"
        cipherArray["Reverse Zig-Zag I"] = "Reverse"
        cipherArray["Reverse Zig-Zag II"] = "Reverse"
        
        cipherArray["Reverse Jewish"] = "Reverse"
        //cipherArray["Reverse Hebrew"] = "Reverse"
        //cipherArray["Reverse Greek"] = "Reverse"
        cipherArray["Reverse Sumerian"] = "Reverse"   


        cipherArray["Reverse Not Primes"] = "Reverse"
        cipherArray["Reverse Odd Numbers"] = "Reverse"
        cipherArray["Reverse Even Numbers"] = "Reverse"
        cipherArray["Reverse Composite Numbers"] = "Reverse"

        
	
	    cipherArray["Reverse 2"] = "Reverse"
        cipherArray["Reverse 7"] = "Reverse"
        cipherArray["Reverse 8"] = "Reverse"
        cipherArray["Reverse 12"] = "Reverse"
        cipherArray["Reverse 28"] = "Reverse"
        cipherArray["Reverse 37"] = "Reverse"
        cipherArray["Reverse 49"] = "Reverse"
        cipherArray["Reverse 64"] = "Reverse"
        cipherArray["Reverse 73"] = "Reverse"
        cipherArray["Reverse 77"] = "Reverse"
        cipherArray["Reverse 137"] = "Reverse"  
        cipherArray["Reverse 369"] = "Reverse"


        cipherArray["Reverse Magic Square"] = "Reverse"
        
        cipherArray["Reverse Sequence"] = "Reverse"
        cipherArray["Reverse Formula"] = "Reverse"
        cipherArray["Reverse Formula II"] = "Reverse"
        cipherArray["Reverse Formula III"] = "Reverse"
        cipherArray["Reverse Primes"] = "Reverse"
        cipherArray["Reverse 𝛑"] = "Reverse"
        cipherArray["Reverse Golden Ratio"] = "Reverse"
        cipherArray["Reverse Fibonacci"] = "Reverse"
        
          
        cipherArray["Reverse Triangular"] = "Reverse"
        cipherArray["Reverse Squares"] = "Reverse"
        cipherArray["Reverse Pentagonal"] = "Reverse"
        cipherArray["Reverse Hexagonal"] = "Reverse"
        cipherArray["Reverse Heptagonal"] = "Reverse"
        cipherArray["Reverse Centered Triangle"] = "Reverse"
        cipherArray["Reverse Centered Square"] = "Reverse"
        cipherArray["Reverse Centered Pentagon"] = "Reverse"
        cipherArray["Reverse Centered Hexagon"] = "Reverse"
        cipherArray["Reverse Centered Heptagon"] = "Reverse"
        cipherArray["Reverse Star Pentagram"] = "Reverse" 
        cipherArray["Reverse Star Hexagram"] = "Reverse" 
        cipherArray["Reverse Star Heptagram"] = "Reverse" 



        cipherArray["Reverse Pyramid"] = "Reverse" 
        cipherArray["Reverse Cube"] = "Reverse"

        cipherArray["Reverse Octagon"] = "Reverse"
         
        cipherArray["Reverse Tetrahedron"] = "Reverse"
        cipherArray["Reverse Hexahedron"] = "Reverse"
        cipherArray["Reverse Octahedron"] = "Reverse"
        cipherArray["Reverse Dodecahedron"] = "Reverse"
        cipherArray["Reverse Icosahedron"] = "Reverse"




        cipherArray["Reverse Old Testament"] = "Reverse" 
        cipherArray["Reverse New Testament"] = "Reverse"
        cipherArray["Reverse 343"] = "Reverse" 
        cipherArray["Reverse 3 Times and 7 Times"] = "Reverse"


        cipherArray["Reverse JXND"] = "Reverse"
        cipherArray["Reverse Enigma"] = "Reverse" 
        cipherArray["Reverse 777"] = "Reverse"
        

        cipherArray["Old Testament"] = "Book of Law"
        cipherArray["New Testament"] = "Book of Law"
        cipherArray["343"] = "Book of Law"
        cipherArray["3 Times and 7 Times"] = "Book of Law"
	



        cipherArray["Lost"] = "Others"
        cipherArray["Hour Glass"] = "Others"
        cipherArray["Soccer Ball"] = "Others"
        cipherArray["Musical Notes"] = "Others"
        cipherArray["Cross"] = "Others"
        cipherArray["Swastika"] = "Others"
        cipherArray["Angels"] = "Others"
        cipherArray["Happy"] = "Others"
        
        
        

        cipherArray["Chaldean"] = "Others"
        //cipherArray["Brazil States"] = "Others"
        cipherArray["English Extended"] = "Others"	
        cipherArray["Zig-Zag I"] = "Others"
        cipherArray["Zig-Zag II"] = "Others" 	
        cipherArray["Jewish Reduction"] = "Others"
	    cipherArray["Jewish Ordinal"] = "Others"
        cipherArray["ALW Kabbalah"] = "Others"
	    cipherArray["KFW Kabbalah"] = "Others"
	    cipherArray["LCH Kabbalah"] = "Others"

	    cipherArray["Hebrew Gematria"] = "Others"
	    cipherArray["Hebrew Ordinal"] = "Others"
	    cipherArray["Hebrew Soffits"] = "Others"
	    cipherArray["Hebrew Reduction"] = "Others"
        
       
        cipherArray["Greek Reduction"] = "Others"
	    cipherArray["Greek Ordinal"] = "Others"
	    cipherArray["Greek Isopsephy"] = "Others"


        cipherArray["JXND"] = "Enigma"
        cipherArray["Enigma"] = "Enigma"
        cipherArray["777"] = "Enigma"
        



	
	//cipherArray["Jewish Reduction Prime"] = "Gematria"
	//cipherArray["Jewish Reduction Trigonal"] = "Gematria"
	//cipherArray["Jewish Reduction Square"] = "Gematria"


}

function Add_Cipher(impName, impBool = true, impUpd = true) {
	openCiphers.push(impName)
	Build_Open_Ciphers()

	if (impBool == true) {breakCipher = impName; Populate_Breakdown()}
	if (impUpd == true) {UpdateUserCiphers()}
}
function Remove_Cipher(impName, impUpd = true) {
	var x

	x = openCiphers.indexOf(impName)
	if (x > -1) {
		openCiphers.splice(x, 1)
	}
	Build_Open_Ciphers()
	if (breakCipher == impName) {
		if (openCiphers.length > 0) {breakCipher = openCiphers[0]} else {breakCipher = ""}
		Populate_Breakdown()
	}
	if (impUpd == true) {UpdateUserCiphers()}
}
function FindSpot(impName) {
	for (x = 0; x < allCiphers.length; x++) {
		if (allCiphers[x].Nickname == impName) {
			return x;
		}
	}
}




eqStr = eqStr.slice(0, eqStr.length - 1)
		tempEq = eqStr
		if (o_Quotes == true) {
			tempPh = '"' + Phrase() + '"'
		} else {
			tempPh = Phrase()
		}

		eqStr = '<font style="font-size: 100%; color: RGB(255, 255, 255);">' + tempPh + '</font><font class="BreakEq"> = '
		if (o_Eq == true) {
			eqStr += tempEq + ' = '
		}
		eqStr += '</font><font style="font-size: 110%; color: RGB(255, 255, 255);"><B>' + eqAdd + '</B></font> <font style="font-size: 75%; color: RGB(' + this.RGB.join() + ');">(' + this.Nickname + ')</font>'
		eqStr += '<div class="CountDiv">('
		if (letterCount == 1) {eqStr += letterCount + ' letter, '} else {eqStr += letterCount + ' letters, '}
		 if (wArr.length == 1) {eqStr += wArr.length + ' word)</div>'} else {eqStr += wArr.length + ' words)</div>'}
		eqStr += '<P><center><button class="MoveCipher" onclick="slide_Cipher('
		eqStr += "'up'"
		eqStr += ')">Move cipher Left/Up</button>&nbsp;<button class="MoveCipher" onclick="slide_Cipher('
		eqStr += "'down'"
		eqStr += ')">Move cipher Right/Down</button><BR>'
		eqStr += '<font style="font-size: 66%; color: #ffffff">View Chart: </font><font style="color: #00ffff"><a href="javascript:Open_Chart()">' + this.Nickname + '</a><font>'
		eqStr += '</center>'
		BreakSpot.innerHTML = eqStr
	







function Slide_Cipher(impDir) {
	var x, y, z, tempCipher

	if (breakCipher == "") {return;}

	x = FindSpot(breakCipher)

	switch (impDir.toLowerCase()) {
		case "up":
			for (z = x - 1; z > -1; z--) {
				if (isCipherOn(allCiphers[z].Nickname) > -1) {
					allCiphers.splice(z, 0, allCiphers[x])
					allCiphers.splice(x + 1, 1)
					break;
				}
			}
			break;
		case "down":
			for (z = x + 1; z < allCiphers.length; z++) {
				if (isCipherOn(allCiphers[z].Nickname) > -1) {
					allCiphers.splice(z + 1, 0, allCiphers[x])
					allCiphers.splice(x, 1)
					break;
				}
			}
			break;
	}

	RestoreField()
	Build_Open_Ciphers()
}

function Build_Open_Ciphers(impBool = false) {
	var x

	ciphersOn = []

	if (impBool == true) {DB_GetCiphers(true)}

	for (x = 0; x < allCiphers.length; x++) {
		if (openCiphers.indexOf(allCiphers[x].Nickname) > -1) {
			ciphersOn[ciphersOn.length] = allCiphers[x]
		}
	}

	Build_Table(opt_Headers)
}

function DB_GetCiphers(impBool = false) {	

	if (impBool == true) {
		qString = "http://www.gematrinator.com/usersettings/viewIP.php"
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
	    	if (this.readyState == 4 && this.status == 200) {
	      		respText = xhttp.responseText
	      		ParseText()
	    	}
		};

		xhttp.open("GET", qString, true);
		xhttp.send();
	}
}

function ParseText() {
	var tempArr = []; tempCiphers = []
	var x

	openCiphers = ["English Ordinal", "Full Reduction", "Reverse Ordinal", "Reverse Full Reduction"]

	if (respText !== "New Record Added" && respText !== "Error") {
		tempArr = respText.split("|")
		tempCiphers = tempArr[0].split(";")
		for (x = 0; x < tempCiphers.length; x++) {
			if (openCiphers.indexOf(tempCiphers[x]) === -1)
			openCiphers.push(tempCiphers[x])
		}
		sHistory = tempArr[1].split(";")
		opt_NumCalculation = tempArr[2]
		opt_Reduce = (tempArr[3] == "true")
		opt_Quotes = (tempArr[4] == "true")
		opt_Summ = (tempArr[5] == "true")
		opt_Breakdown = tempArr[6]
		opt_Chart = (tempArr[7] == "true")
		opt_Shortcuts = (tempArr[8] == "true")
		opt_Headers = (tempArr[9] == "true")
	}

	if (openCiphers.length == 0) {openCiphers = ["English Ordinal", "Full Reduction", "Reverse Ordinal", "Reverse Full Reduction"]}	
	Build_Open_Ciphers()
}