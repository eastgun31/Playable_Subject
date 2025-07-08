using System.Collections;
using UnityEngine;

public class _GameManager : MonoBehaviour
{
	public static _GameManager _instance;

	public int isGameOver = 0;

	public GameObject logo;

	private void Awake()
	{
		if (_instance != null)
		{
			Object.Destroy(base.gameObject);
		}
		else
		{
			_instance = this;
		}
	}

	private void Start()
	{
	}

	private void Update()
	{
		if (isGameOver >= 8)
		{
			logo.SetActive(true);
		}
	}

	private IEnumerator GameOverTime()
	{
		yield return new WaitForSeconds(45f);
		logo.SetActive(true);
		Debug.Log("Game Over");
	}
}
