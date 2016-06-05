/******************************************************************************/
//	项目 : 磁盘调度算法
//  输入 : 
//		1. 调度算法
// 		2. 任意输入流
//      3. 输入流长度
//		4. 磁头方向
//  输出 : 
//		1. 访问序列
// 		2. 寻到长度
/******************************************************************************/

#include <iostream>
#include <stdio.h>
#include <cstdio>
#include <unistd.h>
using namespace std;

// 全局变量
#define MAX 9999
#define CLEAR 'clear'
int searchMethod; 	// 调度方法
int streamMethod; 	// 输入流
int direction;		// 磁头方向
int arr[MAX];		// 磁盘序列
int arrLength;		// 磁盘序列长度

// 函数列表
void Init(); 				// 程序 初始化 
void SearchMethodInit(); 	// 调度方法 初始化
void StreamMethodInit(); 	// 输入流 初始化
void GetArray();			// 磁盘序列 初始化，使用字符方式
void GetArrayByFile();      // 磁盘序列 初始化，使用文件方式
void DirectionInit(); 		// 磁头方向 初始化

void clear();				// 清屏函数
void quit();				// 退出函数
void Search();				// 调度方法 运行
void SSTF(); 				// 最短寻道时间优先 (SSTF)
void SCAN();				// 扫描算法 (SCAN)
void proc();				// 进度条

int main() {
	Init();
	Search();
}

// 程序 初始化 
void Init() {
	SearchMethodInit();
	StreamMethodInit();
	DirectionInit();
	cout<<"初始化成功..."<<endl;
}

// 调度方法 初始化
void SearchMethodInit() {
	cout<<"请选择需要的使用的调度算法:"<<endl;
	cout<<"1. 最短寻道时间优先 (SSTF)"<<endl;
	cout<<"2. 扫描算法 (SCAN)"<<endl;
	cout<<"0. 退出"<<endl;
	cin>>searchMethod;
	clear();
	if(searchMethod == 0)
		quit();
	cout<<"正在初始化调度算法..."<<endl;
}

// 输入流 初始化
void StreamMethodInit() {
	cout<<"请选择需要的使用的流方法:"<<endl;
	cout<<"1. 文件输入"<<endl;
	cout<<"2. 字符输入"<<endl;
	cin>>streamMethod;
	clear();
	if(streamMethod == 1) {
		GetArrayByFile();
	} else if (streamMethod == 2) {
		GetArray();
	}
}

// 磁盘序列 初始化，使用文件方式
void GetArrayByFile() {
	FILE *fp;
	char filename[MAX];
	int i = 0;

	cout<<"请输入文件路径"<<endl;
	cin>>filename;

	if((fp=fopen(filename, "r"))==NULL) {
		cout<<"文件不存在"<<endl;
        exit(1);
    }

    while(~fscanf(fp, "%d", &arr[i])) {
        if(++i == MAX)
        	break;
    }

    fclose(fp);
    clear();
}

// 磁盘序列 初始化，使用字符方式
void GetArray() {
	int i = 0;

	cout<<"请输入磁盘序列长度"<<endl;
	cin>>arrLength;

	cout<<"请输入磁盘序列，并以空格分隔开"<<endl;
	while(i < arrLength) {
		cin>>arr[i];
		if(++i == MAX) 
			break;
	}

	clear();
}

// 磁头方向 初始化
void DirectionInit() {
	cout<<"请输出入磁头方向"<<endl;
	cout<<"1. 向内"<<endl;
	cout<<"2. 向外"<<endl;
	cin>>direction;

	clear();
}

// 调度方法 运行
void Search() {
	if(searchMethod == 1) 
		cout<<"正在运行 最短寻道时间优先 (SSTF) 调度算法"<<endl;
	else if(searchMethod == 2)
		cout<<"正在运行 扫描算法 (SCAN) 调度算法"<<endl;
}

void SSTF(){ int a;} 				// 最短寻道时间优先 (SSTF)
void SCAN(){ int a;}				// 扫描算法 (SCAN)


// 清屏函数
void clear() {
	// system(CLEAR);
	cout<<"清屏....."<<endl;
}

// 退出函数
void quit() {
	cout<<"正在退出..."<<endl;
	exit(0);
}

// 进度条
void proc()  
{  
    int i = 0;  
    for (i = 1; i <= 100; ++i)  
    {  
        printf("-");  
    }  
    fflush(stdout);  
    for (i = 1; i <= 100; ++i)  
    {  
        printf("\b");  
    }  
    for (i = 1; i <= 100; ++i)  
    {  
        printf(">");  
        fflush(stdout);  
        sleep(100);
    }  
  
    printf("\n");  
}  