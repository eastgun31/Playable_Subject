using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class _GameManager : MonoBehaviour
{
    public static _GameManager _instance;
    public int isGameOver = 0;
    public GameObject logo;

    private void Awake()
    {
        if(_instance != null)
            Destroy(gameObject);
        else
            _instance = this;
    }

    void Start()
    {
        //StartCoroutine(GameOverTime());
    }

    private void Update()
    {
        if(isGameOver >= 8)
            logo.SetActive(true);
    }

    IEnumerator GameOverTime()
    {
        yield return new WaitForSeconds(45f);
        logo.SetActive(true);
        Debug.Log("Game Over");
    }
}
