class PseudoCode {
    constructor() {
        this.algorithm = '';
        this.code = {
            bubbleSort: `
            <pre>
                begin BubbleSort(list)
                
                   for all elements of list
                      if list[i] > list[i+1]
                         swap(list[i], list[i+1])
                      end if
                   end for
                   
                   return list
                   
                end BubbleSort
            </pre>
            
            `
        }

    }


}

export default PseudoCode;