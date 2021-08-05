package pro04;

import java.util.Arrays;

/**
 * 
 * @Title: 数组高级特性
 * @Deseription:
 * @author 萝茗
 * @date 2021年8月5日
 * @version 1.0
 *
 */
public class array03 {

	public static void main(String[] args) {
//		1.数组的赋值
		System.out.print("1.数组的赋值\n");
		int[] arr = { 1, 3, 5, 7, 9 };
		int[] arr1 = arr;
		System.out.println("1数组arr为：" + arr);
		System.out.println("2数组arr1为：" + arr1);
		System.out.println("修改前arr" + Arrays.toString(arr));
		System.out.println("修改前arr1" + Arrays.toString(arr1));

		arr1[2] = 33;
		System.out.println("3数组arr为：" + arr);
		// 4 数组arr1为：[I@123a439b --(1-4地址都相同，因为数组是引用类型，都指向同一个地址)
		System.out.println("4数组arr1为：" + arr1);
		System.out.println("修改后arr" + Arrays.toString(arr));// 修改后arr[1, 3, 33, 7, 9]
		// 修改后arr1[1, 3, 33, 7, 9] --（修改一个，所有都变化，因为是修改的是同一个地址里面的数据）
		System.out.println("修改后arr1" + Arrays.toString(arr1));

//		2.数组的复制
		System.out.print("\n2.数组的复制\n");
//		2.1使用for循环完成数组的拷贝
		int[] arra = { 1, 2, 3, 4, 5};
		int[] arra1;// 数组定义
		arra1 = new int[arra.length];// 开辟空间
		for (int i = 0; i < arra.length; i++) {
			arra1[i]=arra[i];
		}
		System.out.println("arra1为："+Arrays.toString(arra1));//[1, 2, 3, 4, 5]
//		2.2使用API--System.arraycopy()完成数组拷贝
//		原素组
		int[] srcArray= {200,500,400,100};
//		目标数组
		int[] destArray=new int[srcArray.length];
//		应用System.arraycopy(src1, 0, src2, 0, 0);将数组src1拷贝给src2
		System.arraycopy(srcArray, 0, destArray, 0, srcArray.length);
		System.out.println("destArray为："+Arrays.toString(destArray));
//		2.3使用API--Arrays.copyOf()完成数组拷贝
//		原素组
		int[] src= {300,600,700,200};
//		目标数组
		int[] dest=Arrays.copyOf(src,src.length);
		System.out.println("dest为："+Arrays.toString(dest));//dest为：[300, 600, 700, 200]
		
//		特殊要求：元素组扩容
		src=Arrays.copyOf(src,src.length+1);
		System.out.println("src扩容为："+Arrays.toString(src));//src扩容为：[300, 600, 700, 200, 0]
		src[src.length-1]=123;
		System.out.println("src扩容后赋值为："+Arrays.toString(src));//src扩容后赋值为：[300, 600, 700, 200, 123]
//		数组缩容
		src=Arrays.copyOf(src,src.length-1);
		System.out.println("src缩容为："+Arrays.toString(src));//src缩容为：[300, 600, 700, 200]
	}

}
