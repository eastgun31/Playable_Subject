using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MatchController : MonoBehaviour
{
    [SerializeField] private List<GameObject> case1;
    [SerializeField] private List<GameObject> case2;
    [SerializeField] private List<GameObject> case3;
    [SerializeField] private List<GameObject> case4;
    [SerializeField] private List<GameObject> case5;
    [SerializeField] private List<GameObject> case6;
    [SerializeField] private List<GameObject> case7;
    [SerializeField] private List<GameObject> case8;
    
    public void MatchCheck(int index)
    {
        switch (index)
        {
            case 1:
                MatchAction(case1);
                break;
            case 2:
                MatchAction(case2);
                break;
            case 3:
                MatchAction(case3);
                break;
            case 4:
                MatchAction(case4);
                break;
            case 5:
                MatchAction(case5);
                break;
            case 6:
                MatchAction(case6);
                break;
            case 7:
                MatchAction(case7);
                break;
            case 8:
                MatchAction(case8);
                break;
        }
    }

    private void MatchAction(List<GameObject> objs)
    {
        for(int i = 0; i < objs.Count; i++)
        {
            int temp1 = objs[i].GetComponent<MatchObject>().id;
            int temp2 = objs[i].transform.GetChild(0).GetComponent<MatchObject>().id;

            if(temp1 != temp2)
                break;

            if (i == objs.Count - 1)
            {
                DestroyObj(objs);
                _GameManager._instance.isGameOver ++;
            }
        }
    }

    private void DestroyObj(List<GameObject> objs)
    {
        for(int i = 0; i < objs.Count; i++)
        {
            Destroy(objs[i]);
        }

        objs.Clear();
    }
}
